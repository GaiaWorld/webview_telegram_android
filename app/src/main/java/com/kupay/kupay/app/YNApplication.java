package com.kupay.kupay.app;

import android.app.Application;
import android.support.multidex.MultiDex;

import com.kupay.kupay.common.WebViewManager;

import org.telegram.messenger.ApplicationLoader;

public class YNApplication extends ApplicationLoader {
    private static Application appCtx;


    @Override
    public void onCreate() {
        super.onCreate();
        appCtx = this;
        MultiDex.install(getAppCtx());
        WebViewManager manager = WebViewManager.touch();
        manager.initWebView();
    }

    /**
     * Getter
     *
     * @return The application's context
     */
    public static Application getAppCtx() {
        return appCtx;
    }
}
