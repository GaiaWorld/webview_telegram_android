package com.kupay.kupay.interceptor;

import android.util.Log;
import android.webkit.MimeTypeMap;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;

import com.kupay.kupay.app.YNApplication;

import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.MalformedURLException;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.net.URL;

public class Interceptor {

    private class InterceptorStatus {
        /*
            Give a state than determine if force fetch from the server
         */
        public boolean forceFetchFromServer = false;

        /*
            Specified server addresses
         */
        public List<String> serverAddresses = new ArrayList<>();

    }

    HashMap<String, InterceptorHandler> handlerHashMap = new HashMap<>();

    InterceptorStatus status = new InterceptorStatus();

    /* Information during fetch */
    String protocol = "";
    String serverAddress = "";
    String actionName = "";
    String URI = "";
    Object webView = null;
    String URL = "";

    /* Files do not take over */
    List<String> exceptions = new ArrayList<>();

    public static HashMap<String, Object> staticRes = new HashMap<>();

    public Interceptor() {
        /// Add handler to hash map
        handlerHashMap.put("update", new PendingUpdateFileHandler());
        handlerHashMap.put("setflag", new SetFlagHandler());
        handlerHashMap.put("setserveraddr", new SetServerAddress());
        handlerHashMap.put("reload", new ReloadHandler());
        handlerHashMap.put("applyupload", new ApplyUpdateHandler());

        // Add exceptions
        exceptions.add("index.js");
    }

    public void setWebView(Object webView) {
        this.webView = webView;
    }

    public InterceptorStatus getStatus() {
        return status;
    }

    public String getProtocol() {
        return protocol;
    }

    public String getServerAddress() {
        return serverAddress;
    }

    public String getActionName() {
        return actionName;
    }

    public String getURI() {
        return URI;
    }

    public String getURL() {
        return URL;
    }

    public Object getWebView() {
        return webView;
    }

    public static String getHTMLContent(URL url) throws IOException {
        try {
            // get URL content
            URLConnection conn = url.openConnection();

            // open the stream and put it into BufferedReader
            BufferedReader br = new BufferedReader(
                    new InputStreamReader(conn.getInputStream()));

            String inputChar;

            String HTML = "";

            while ((inputChar = br.readLine()) != null) {
                HTML += (inputChar);
            }
            return HTML;

        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * Get a intercept handle for currsponding handler, this method also tests weather to intercept
     * @param url   url to test
     * @return InterceptorHandler if intercepted, otherwise null
     */
    public InterceptorHandler GetInterceptHandle(String url) {
        Pattern pattern = Pattern.compile("(http(s?))://(\\$?([\\w\\d-_\\.]+))/?(.*)$");
        Matcher matcher = pattern.matcher(url);

        if (!matcher.find())
            // If does not match above regular expression
            return null;

        protocol = matcher.group(1);
        serverAddress = matcher.group(3);
        actionName = matcher.group(4);
        URI = matcher.group(5);
        URL = url;

        /// give a default server address if not set
        if (status.serverAddresses.isEmpty())
            status.serverAddresses.add(protocol + "://" + serverAddress);

        // If server address does not start with '/' maeans it's a normal URL,
        // instead of an API we defined
        if (serverAddress.equals(actionName)) {
            // Test status: if fetch from server then direct fetch from server
            if (status.forceFetchFromServer)
                return null;

            // if is exception situation
            //   for the wallet project, always let index.js pass
            for (String exception : exceptions) {
                if (URI.contains(exception))
                    return null;
            }

            // else get resource locally via uri
            return new FetchFromLocalHandler();
        }

        // else is action name
        InterceptorHandler interceptorHandler = handlerHashMap.get(actionName);
        if (interceptorHandler == null) {
            // no such handler
            return null;
        }
        // return currsponding handler
        return interceptorHandler;
    }

    /********************** Handlers *********************/

    // Toke over resources
    public class FetchFromLocalHandler implements InterceptorHandler {

        /* files will be put inside /data partition */
        List<String> fileInsideDataPatition = new ArrayList<>();

        public FetchFromLocalHandler() {
            fileInsideDataPatition.add("index.html");
            fileInsideDataPatition.add("init.js");
            fileInsideDataPatition.add(".depend");
            fileInsideDataPatition.add("depend");
        }

        private String readAllLines(InputStream IS, String charset) throws Exception {
            BufferedReader br = new BufferedReader(new InputStreamReader(IS, charset));
            String line = "";
            String content = "";
            while ((line = br.readLine()) != null) {
                content = content + line + "\n";
            }
            return content;
        }

        public WebResourceResponse handle(Interceptor interceptor) {
            // always take over asset files,
            // for 5 files in boot directory, has 3 situations
            //   - always let index.js pass (for update check) [handled inside intercepter]
            //   - check if /data/data/packageName/ dir has the 4 files(one by one)
            //      - if exists, load from /data partition
            //      - otherwise, load from android asset
            InputStream in = null;

            String packageName = YNApplication.getAppCtx().getPackageName();
            String file = "";

            // Check if files exists inside the /data partition
            for (String _file : fileInsideDataPatition) {
                // Be able to fetch inside the data partition
                if (getURI().contains(_file)) {
                    file = "/data/data/" + packageName + "/" + _file;
                    File f = new File(file);

                    // If files exists. load it
                    if(f.exists() && !f.isDirectory()) {
                        try {
                            in = new FileInputStream(file);
                        }
                        catch (Exception e) {
                            e.printStackTrace();
                        }
                    }

                    break;
                }
            }

            // fetch inside android asset
            try {
                String assetFileName = getURI().split("\\?")[0];
                in = YNApplication.getAppCtx().getAssets().open(assetFileName);
            }
            // Get local file
            catch (Exception e) {
                e.printStackTrace();
            }

            if (in == null)
                return null;

            String mimeType = MimeTypeMap.getSingleton().getMimeTypeFromExtension(MimeTypeMap.getFileExtensionFromUrl(getURL().split("\\?")[0]));
            return new WebResourceResponse(mimeType, "UTF-8", in);
        }
    }

    // Update resources from web (save downloaded file to memory)
    public class PendingUpdateFileHandler implements InterceptorHandler {
        public WebResourceResponse handle(Interceptor interceptor) {
            status.serverAddresses.clear();
            status.serverAddresses.add("192.168.33.122");
            String result = "true";
            try {
                String content = getHTMLContent(new URL(getProtocol() + "://" + status.serverAddresses.get(0) + "/" + getURI()));
                staticRes.put("" + getURI().split("\\?")[0], content);
                Log.d("pending", "[" + getURI().split("\\?")[0] + "]" + content);
            }
            catch (Exception e) {
                e.printStackTrace();
                result = "false";
                Log.d("pending failed", "[" + getURI().split("\\?")[0] + "]");
            }
            String returnValue = "{ \"update_success\": " + result + "}";
            InputStream in = null;
            try {
                in = new ByteArrayInputStream(returnValue.getBytes("UTF-8"));
            }
            catch (Exception e) {
                e.printStackTrace();
                in = new ByteArrayInputStream(returnValue.getBytes());
            }

            return new WebResourceResponse("text/json", "UTF-8", in);
        }
    }

    // Set state
    public class SetFlagHandler implements InterceptorHandler {
        public WebResourceResponse handle(Interceptor interceptor) {
            String settingName = getURI();
            String returnValue = "true";
            String message = "";
            String packageName = YNApplication.getAppCtx().getPackageName();
            if (settingName.equals("force-server-fetch")) {
                status.forceFetchFromServer = true;
            }
            else if (settingName.equals("local-fetch")) {
                status.forceFetchFromServer = false;
            }
            else {
                returnValue = "false";
                message = "no such command";
            }

            Log.d("SetFlag", "returnValue=" + returnValue + ", message=" + message);
            returnValue = "{ \"success\":" + returnValue + "}";
            InputStream in = null;
            try {
                in = new ByteArrayInputStream(returnValue.getBytes("UTF-8"));
            }
            catch (Exception e) {
                e.printStackTrace();
                in = new ByteArrayInputStream(returnValue.getBytes());
            }

            return new WebResourceResponse("text/json", "UTF-8", in);
        }
    }

    // Set server address
    public class SetServerAddress implements InterceptorHandler {
        public WebResourceResponse handle(Interceptor interceptor) {
            String[] servers = getURI().split("\\&");
            status.serverAddresses.clear();
            for (String server : servers) {
                status.serverAddresses.add(server);
            }

            String returnValue = "{ \"success\" : true }";

            InputStream in = null;
            try {
                in = new ByteArrayInputStream(returnValue.getBytes("UTF-8"));
            }
            catch (Exception e) {
                e.printStackTrace();
                in = new ByteArrayInputStream(returnValue.getBytes());
            }

            return new WebResourceResponse("text/json", "UTF-8", in);
        }
    }

    public class ReloadHandler implements InterceptorHandler {
        public WebResourceResponse handle(Interceptor interceptor) {
            status.serverAddresses.clear();
            status.forceFetchFromServer = false;

            if (interceptor.webView instanceof WebView)
                ((WebView)interceptor.webView).reload();
            else if (interceptor.webView instanceof com.tencent.smtt.sdk.WebView)
                ((com.tencent.smtt.sdk.WebView)interceptor.webView).reload();

            String returnValue = "{ \"success\" : true }";

            InputStream in = null;
            try {
                in = new ByteArrayInputStream(returnValue.getBytes("UTF-8"));
            }
            catch (Exception e) {
                e.printStackTrace();
                in = new ByteArrayInputStream(returnValue.getBytes());
            }

            return new WebResourceResponse("text/json", "UTF-8", in);
        }
    }

    public class ApplyUpdateHandler implements InterceptorHandler {
        public WebResourceResponse handle(Interceptor interceptor) {
            String returnValue = "true", message = "";
            String packageName = YNApplication.getAppCtx().getPackageName();
            for (String filename : staticRes.keySet()) {
                String file = "/data/data/" + packageName + "/" + filename;
                try (PrintWriter out = new PrintWriter(file)) {
                    out.println(staticRes.get(filename));
                }
                catch (Exception e) {
                    returnValue = "false";
                    message = e.getMessage();
                    e.printStackTrace();
                }
            }
            staticRes.clear();
            returnValue = "{ \"success\":" + returnValue + "}";
            InputStream in = null;
            try {
                in = new ByteArrayInputStream(returnValue.getBytes("UTF-8"));
            }
            catch (Exception e) {
                e.printStackTrace();
                in = new ByteArrayInputStream(returnValue.getBytes());
            }

            return new WebResourceResponse("text/json", "UTF-8", in);
        }
    }

}