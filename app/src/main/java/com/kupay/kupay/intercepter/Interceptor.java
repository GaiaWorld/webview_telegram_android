package com.kupay.kupay.intercepter;

import android.content.Context;
import android.net.Uri;
import android.webkit.MimeTypeMap;

import com.kupay.kupay.app.YNApplication;
import com.kupay.kupay.common.js.JSEnv;

import org.json.JSONArray;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;

public class Interceptor {

    Uri uri;
    Object webview;

    static String[] domains = null;
    static String[] bootDirs = null;
    static boolean fetchFromMobile = true;

    public Interceptor() {
        uri = null;
        webview = null;
    }

    public void setWebview(Object webview) {
        this.webview = webview;
    }

    public InterceptorHandler GetInterceptHandle(Uri uri) {
        this.uri = uri;

        String path = uri.getPath();
        InterceptorHandler handler = null;
        if (path.startsWith("/$intercept")) {
            handler = new SetInterceptHandler();
        } else if (path.startsWith("/$resinfo")) {
            handler = new ResInfoHandler();
        } else if (fetchFromMobile) {
            if (uri.toString().contains("$forceServer=1")) {
                handler = null;
            } else if (domains == null) {
                handler = new FetchFromLocalHandler();
            } else {
                String url = uri.toString();
                for (int i = 0; i < domains.length; ++i) {
                    if (url.startsWith(domains[i])) {
                        handler = new FetchFromLocalHandler();
                    }
                }
            }
        }
        return handler;
    }

    /********************** Handlers *********************/

    /**
     * 设置拦截标记
     */
    public class SetInterceptHandler implements InterceptorHandler {
        public Object handle(Interceptor interceptor) {
            String value = interceptor.uri.getQueryParameter("value");
            fetchFromMobile = "1".equals(value);
            String result = "true";
            InputStream in = null;
            try {
                in = new ByteArrayInputStream(result.getBytes("UTF-8"));
            } catch (Exception e) {
                in = new ByteArrayInputStream(result.getBytes());
            }

            Object response = null;
            if (interceptor.webview instanceof android.webkit.WebView) {
                response = new android.webkit.WebResourceResponse("text/json", "UTF-8", in);
            } else if (interceptor.webview instanceof com.tencent.smtt.sdk.WebView) {
                response = new com.tencent.smtt.export.external.interfaces.WebResourceResponse("text/json", "UTF-8", in);
            }
            return response;
        }
    }

    /**
     * 设置资源信息
     */
    public class ResInfoHandler implements InterceptorHandler {
        public Object handle(Interceptor interceptor) {
            try {
                JSONArray domainsArray = new JSONArray(interceptor.uri.getQueryParameter("domains"));
                domains = new String[domainsArray.length()];
                for (int i = 0; i < domainsArray.length(); i++) {
                    domains[i] = domainsArray.getString(i);
                }

                JSONArray bootDirStr = new JSONArray(interceptor.uri.getQueryParameter("bootdirs"));
                bootDirs = new String[bootDirStr.length()];
                for (int i = 0; i < bootDirStr.length(); i++) {
                    bootDirs[i] = bootDirStr.getString(i);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }

            String result = "true";
            InputStream in = null;
            try {
                in = new ByteArrayInputStream(result.getBytes("UTF-8"));
            } catch (Exception e) {
                in = new ByteArrayInputStream(result.getBytes());
            }

            Object response = null;
            if (interceptor.webview instanceof android.webkit.WebView) {
                response = new android.webkit.WebResourceResponse("text/json", "UTF-8", in);
            } else if (interceptor.webview instanceof com.tencent.smtt.sdk.WebView) {
                response = new com.tencent.smtt.export.external.interfaces.WebResourceResponse("text/json", "UTF-8", in);
            }
            return response;
        }
    }

    public class FetchFromLocalHandler implements InterceptorHandler {

        // 从手机路径读不到，就到assert路径读取
        public Object handle(Interceptor interceptor) {

            Context context = (Context) JSEnv.getEnv(JSEnv.CONTEXT);

            String path = interceptor.uri.getPath();

            String fullPath = "/data/data/" + context.getPackageName() + path;

            File f = new File(fullPath);
            if(f.exists() && !f.isDirectory()) {
                try {
                    FileInputStream stream = new FileInputStream(f);
                    String mimeType = MimeTypeMap.getSingleton().getMimeTypeFromExtension(MimeTypeMap.getFileExtensionFromUrl(interceptor.uri.toString()));

                    Object response = null;
                    if (interceptor.webview instanceof android.webkit.WebView) {
                        response = new android.webkit.WebResourceResponse(mimeType, "UTF-8", stream);
                    } else if (interceptor.webview instanceof com.tencent.smtt.sdk.WebView) {
                        response = new com.tencent.smtt.export.external.interfaces.WebResourceResponse(mimeType, "UTF-8", stream);
                    }
                    return response;
                } catch (Exception e) {

                }
            }

            try {
                if (path.contains(".depend")) {
                    path = path.replace(".depend", "depend");
                }
                if (path.startsWith("/")) {
                    path = path.substring(1);
                }
                InputStream stream = YNApplication.getAppCtx().getAssets().open(path);
                String mimeType = MimeTypeMap.getSingleton().getMimeTypeFromExtension(MimeTypeMap.getFileExtensionFromUrl(interceptor.uri.toString()));

                Object response = null;
                if (interceptor.webview instanceof android.webkit.WebView) {
                    response = new android.webkit.WebResourceResponse(mimeType, "UTF-8", stream);
                } else if (interceptor.webview instanceof com.tencent.smtt.sdk.WebView) {
                    response = new com.tencent.smtt.export.external.interfaces.WebResourceResponse(mimeType, "UTF-8", stream);
                }
                return response;

            } catch (Exception e) {
                e.printStackTrace();
            }
            return null;
        }
    }
}