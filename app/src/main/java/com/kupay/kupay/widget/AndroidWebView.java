package com.kupay.kupay.widget;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Handler;
import android.os.Message;
import android.support.annotation.Nullable;
import android.support.v7.app.AlertDialog;
import android.util.AttributeSet;
import android.util.Log;
import android.webkit.JsResult;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.LinearLayout;

import com.kupay.kupay.R;
import com.kupay.kupay.callback.WebViewLoadProgressCallback;
import com.kupay.kupay.common.js.JSBridge;
import com.kupay.kupay.common.js.JSEnv;
import com.kupay.kupay.interceptor.Interceptor;
import com.kupay.kupay.interceptor.InterceptorHandler;
import com.kupay.kupay.util.Logger;

import java.lang.ref.WeakReference;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.Timer;
import java.util.TimerTask;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/21.
 * Google 原生
 */
public class AndroidWebView extends WebView {
    private static final int START_CONN = 1;//While AndroidWebView start load url,this value will be send to handler.
    private static final int CONNECT_TIME_OUT = 2;//Have been time out.
    /**
     * The min value of connect time out,you can't set value less than this value
     */
    private static final int MIN_TIME_OUT = 1000;
    private int connectTimeOut;
    private WebViewLoadProgressCallback loadCallback;
    private TimerOutHandler mTimerOutHandler = new TimerOutHandler(this);
    private Timer mTimer;
    private Context ctx;
    private boolean showTimeOut;

    /**
     * Constructs a new WebView with a Context object.
     *
     * @param context a Context object used to access application assets
     */
    public AndroidWebView(Context context) {
        this(context, null);
    }

    /**
     * Constructs a new WebView with layout parameters.
     *
     * @param context a Context object used to access application assets
     * @param attrs   an AttributeSet passed to our parent
     */
    public AndroidWebView(Context context, AttributeSet attrs) {
        super(context, attrs);
        connectTimeOut = Integer.parseInt(getResources().getString(R.string.connect_url_time_out_value));
        connectTimeOut = connectTimeOut >= MIN_TIME_OUT ? connectTimeOut : MIN_TIME_OUT;
        this.ctx = context;
        this.init();
    }

    /**
     * 初始化
     */
    private void init() {
        Logger.wtf("Using WebView", "原生");
        this.post(new Runnable() {
            @Override
            public void run() {
                initClient();
                initSettings();
            }
        });
    }

    /**
     * 初始化它的设置
     */
    @SuppressLint("SetJavaScriptEnabled")
    private void initSettings() {
        WebSettings settings = this.getSettings();
        //桥接接口
        JSEnv.setEnv(JSEnv.WEBVIEW, this);
        this.addJavascriptInterface(new JSBridge(), "JSBridge");
        String ua = settings.getUserAgentString();
        settings.setUserAgentString(ua + " YINENG_ANDROID/1.0");
        settings.setJavaScriptEnabled(true);//可以与js交互
        // 设置自适应屏幕，两者合用
        settings.setUseWideViewPort(true);//将图片调整到适合webView的大小
        settings.setLoadWithOverviewMode(true);//缩放至屏幕的大小
        settings.setAllowFileAccess(true);//设置可以访问文件
        settings.setAllowFileAccessFromFileURLs(true);
        settings.setAllowUniversalAccessFromFileURLs(true);
        settings.setLoadsImagesAutomatically(true);//支持自动加载图片
        settings.setDefaultTextEncodingName("utf-8");//设置编码格式
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);//默认 根据cache-control决定是否从网络上取数据。
        settings.setDomStorageEnabled(true);//开启 DOM storage API 功能
        settings.setDatabaseEnabled(true);//开启 database storage API 功能
        settings.setAppCacheEnabled(true);//开启 Application Caches 功能
        String cacheDirPath = ctx.getFilesDir().getAbsolutePath() + ctx.getResources().getString(R.string.app_name);
        settings.setAppCachePath(cacheDirPath); //设置  Application Caches 缓存目录
        // 缩放操作
        settings.setSupportZoom(true);//支持缩放，默认为true。是下面那个的前提。
        settings.setBuiltInZoomControls(true);//设置内置的缩放控件。若为false，则该WebView不可缩放
        settings.setDisplayZoomControls(false);//隐藏原生的缩放控件
        settings.setSupportMultipleWindows(true);
        settings.setJavaScriptCanOpenWindowsAutomatically(true);
        LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.MATCH_PARENT);
        this.setLayoutParams(layoutParams);
        setWebContentsDebuggingEnabled(true);
    }

    /**
     * 初始化内部
     */
    private void initClient() {
        try {
            this.setWebChromeClient(new WebChromeClient() {
                @Override
                public boolean onJsAlert(WebView view, String url, String message, final JsResult result) {
                    new AlertDialog.Builder(ctx)
                            .setTitle("提示")
                            .setMessage(message)
                            .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                                @Override
                                public void onClick(DialogInterface dialog, int which) {
                                    result.confirm();
                                }
                            })
                            .setCancelable(false)
                            .create()
                            .show();
                    return true;
                }
            });
            this.setWebViewClient(new WebViewClient() {
                Interceptor interceptor = new Interceptor();

                @Override
                public void onPageStarted(WebView view, String url, Bitmap favicon) {
                    super.onPageStarted(view, url, favicon);
                    setShowTimeOut(false);
                    if (null != mTimer) {
                        mTimer.cancel();
                        mTimer.purge();
                    }
                    mTimer = new Timer();
                    TimerTask timerTask = new TimerTask() {
                        @Override
                        public void run() {
                            mTimerOutHandler.sendEmptyMessage(START_CONN);
                        }
                    };
                    mTimer.schedule(timerTask, connectTimeOut, 10);
                }

                @Override
                public void onPageFinished(WebView view, String url) {
                    super.onPageFinished(view, url);
                    if (null != loadCallback) {
                        loadCallback.onLoadFinished();
                    }
                    if (null != mTimer) {
                        mTimer.cancel();
                        mTimer.purge();
                    }
                }

                @Override
                public boolean shouldOverrideUrlLoading(WebView view, String url) {
                    if (url.startsWith("http") || url.startsWith("file")) {
                        HashMap<String, String> extraHeaders = new HashMap<>();
                        extraHeaders.put("Referer", view.getUrl()); // 需要加上referer，否则有些服务器会拒绝加载页面
                        view.loadUrl(url, extraHeaders);
                        return true;
                    }
                    try {
                        final Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP);
                        view.getContext().startActivity(intent);
                    } catch (Exception e) {
                        // 防止没有安装的情况
                        e.printStackTrace();
                    }
                    return true;
                }

                @Override
                public WebResourceResponse shouldInterceptRequest(WebView view, String url) {
                    try {
                        url = URLDecoder.decode(url, "utf-8");
                    }
                    catch (Exception e) {
                        e.printStackTrace();
                    }

                    InterceptorHandler handler = interceptor.GetInterceptHandle(url);

                    // Do not take over
                    if (handler == null) {
                        Log.d("Intercept", url + " (pass)");
                        return super.shouldInterceptRequest(view, url);
                    }

                    // Take over
                    Log.d("Intercept", url + " (took over)");
                    WebResourceResponse response = handler.handle(interceptor);
                    HashMap<String, String> extraHeaders = new HashMap<>();
                    extraHeaders.put("Referer", url);
                    extraHeaders.put("X-Intercept-Take-Over", "1");
                    response.setResponseHeaders(extraHeaders);

                    return response;
                }
            });
            String url = ctx.getResources().getString(R.string.init_url);
            // 需要加上referer，否则有些服务器会拒绝加载页面
            HashMap<String, String> extraHeaders = new HashMap<>();
            extraHeaders.put("Referer", url);
            loadUrl(url, extraHeaders);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * Handler:will be used to update UI,must use weak reference,
     * else will leaks.
     */
    private static class TimerOutHandler extends Handler {
        private WeakReference<AndroidWebView> weak;

        private TimerOutHandler(AndroidWebView androidWebView) {
            weak = new WeakReference<>(androidWebView);
        }

        @Override
        public void handleMessage(Message msg) {
            super.handleMessage(msg);
            AndroidWebView androidWebView = weak.get();
            if (null == androidWebView) return;
            switch (msg.what) {
                //start load url
                case START_CONN:
                    if (androidWebView.getProgress() < 100) {
                        androidWebView.mTimerOutHandler.sendEmptyMessage(CONNECT_TIME_OUT);
                        androidWebView.mTimer.cancel();
                        androidWebView.mTimer.purge();
                    }
                    break;
                //connect time out
                case CONNECT_TIME_OUT:
                    if (null != androidWebView.loadCallback && !androidWebView.isShowTimeOut()) {
                        androidWebView.loadCallback.onLoadTimeOut();
                        androidWebView.setShowTimeOut(true);
                    }
                    break;
            }
        }
    }

    /**
     * getter
     *
     * @return 1、true the dialog is showing 2、false:never
     */
    private boolean isShowTimeOut() {
        return showTimeOut;
    }

    /**
     * setter
     *
     * @param showTimeOut whether the dialog is showing
     */
    private void setShowTimeOut(boolean showTimeOut) {
        this.showTimeOut = showTimeOut;
    }

    /**
     * Setter
     *
     * @param loadCallback WebViewLoadProgressCallback impl
     */
    public void setLoadCallback(WebViewLoadProgressCallback loadCallback) {
        this.loadCallback = loadCallback;
    }
}
