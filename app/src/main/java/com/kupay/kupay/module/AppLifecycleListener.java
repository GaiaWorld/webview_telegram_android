package com.kupay.kupay.module;

import android.app.Activity;
import android.app.Application;
import android.os.Bundle;

import com.kupay.kupay.base.BaseJSModule;
import com.kupay.kupay.common.js.JSEnv;

/**
 * Created by "iqos_jay@outlook.com" on 2018/7/30.
 */
public class AppLifecycleListener extends BaseJSModule implements Application.ActivityLifecycleCallbacks {
    private static final String JS_CALLBACK = "handle_app_lifecycle_listener('%s')";
    private static final String ON_APP_RESUMED = "onAppResumed";
    private static final String ON_APP_PAUSED = "onAppPaused";
    private boolean background;

    @Override
    public void onActivityCreated(Activity activity, Bundle savedInstanceState) {

    }

    @Override
    public void onActivityStarted(Activity activity) {

    }

    @Override
    public void onActivityResumed(Activity activity) {
        if (isBackground()) {
            setBackground(false);
            try {
                android.webkit.WebView webView = (android.webkit.WebView) JSEnv.getEnv(JSEnv.WEBVIEW);
                webView.evaluateJavascript(String.format(JS_CALLBACK, "onAppResumed"), null);
            } catch (ClassCastException e) {
                com.tencent.smtt.sdk.WebView webView = (com.tencent.smtt.sdk.WebView) JSEnv.getEnv(JSEnv.WEBVIEW);
                webView.evaluateJavascript(String.format(JS_CALLBACK, "onAppResumed"), null);
                e.printStackTrace();
            }
        }
    }

    @Override
    public void onActivityPaused(Activity activity) {
        if (!isBackground()) {
            setBackground(true);
            try {
                android.webkit.WebView webView = (android.webkit.WebView) JSEnv.getEnv(JSEnv.WEBVIEW);
                webView.evaluateJavascript(String.format(JS_CALLBACK, "onAppPaused"), null);
            } catch (ClassCastException e) {
                com.tencent.smtt.sdk.WebView webView = (com.tencent.smtt.sdk.WebView) JSEnv.getEnv(JSEnv.WEBVIEW);
                webView.evaluateJavascript(String.format(JS_CALLBACK, "onAppPaused"), null);
                e.printStackTrace();
            }
        }
    }

    @Override
    public void onActivityStopped(Activity activity) {

    }

    @Override
    public void onActivitySaveInstanceState(Activity activity, Bundle outState) {

    }

    @Override
    public void onActivityDestroyed(Activity activity) {

    }


    /**
     * getter
     *
     * @return true for the application is going to background.
     */
    private boolean isBackground() {
        return background;
    }

    /**
     * setter
     *
     * @param background true for the application is going to background.
     */
    private void setBackground(boolean background) {
        this.background = background;
    }
}
