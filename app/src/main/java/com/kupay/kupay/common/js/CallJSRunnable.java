package com.kupay.kupay.common.js;

import com.kupay.kupay.common.WebViewManager;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/27.
 */
public class CallJSRunnable implements Runnable {

    private final String func;

    public CallJSRunnable(String func) {
        this.func = func;
    }

    @Override
    public void run() {
        if (WebViewManager.isX5Core()) {
            com.tencent.smtt.sdk.WebView webView = (com.tencent.smtt.sdk.WebView) JSEnv.getEnv(JSEnv.WEBVIEW);
            webView.evaluateJavascript(func, null);
        } else {
            android.webkit.WebView webView = (android.webkit.WebView) JSEnv.getEnv(JSEnv.WEBVIEW);
            webView.evaluateJavascript(func, null);
        }
    }
}
