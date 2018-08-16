package com.kupay.kupay.common;

import android.content.Context;
import android.content.SharedPreferences;
import android.webkit.WebView;

import com.tencent.smtt.sdk.QbSdk;
import com.kupay.kupay.app.YNApplication;
import com.kupay.kupay.util.WebViewUtil;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/21.
 * Decide which webView will be used to show data.
 */
public class WebViewManager {
    private static final String BASIC_CONFIG = "basic_config";
    private static final String IS_X5_CHROME = "is_x5_chrome";
    private static WebViewManager instance;
    private static boolean x5Core;//是否使用X5内核

    private WebViewManager() {
        WebView awv = new WebView(YNApplication.getAppCtx());
        boolean useAndroidWebView = WebViewUtil.shouldUseAndroidWebView(awv, YNApplication.getAppCtx());
        setX5Core(!useAndroidWebView);
    }

    public static WebViewManager touch() {
        synchronized (WebViewManager.class) {
            if (null == instance) {
                instance = new WebViewManager();
            }
        }
        return instance;
    }

    /**
     * Decide which webView will be used.
     */
    public void initWebView() {
        if (isX5Core()) {
            //Do not use Android's WebView
            //Need init the X5 Chrome
            QbSdk.initX5Environment(YNApplication.getAppCtx(), new QbSdk.PreInitCallback() {
                @Override
                public void onViewInitFinished(boolean isX5Core) {
                    setX5Core(!isX5Core);
                }

                @Override
                public void onCoreInitFinished() {
                }
            });

        }
    }

    public static boolean isX5Core() {
        SharedPreferences sp = YNApplication.getAppCtx().getSharedPreferences(BASIC_CONFIG, Context.MODE_PRIVATE);
        x5Core = sp.getBoolean(IS_X5_CHROME, false);
        return x5Core;
    }

    private static void setX5Core(boolean x5Core) {
        SharedPreferences sp = YNApplication.getAppCtx().getSharedPreferences(BASIC_CONFIG, Context.MODE_PRIVATE);
        SharedPreferences.Editor edit = sp.edit();
        edit.putBoolean(IS_X5_CHROME, x5Core);
        edit.apply();
        WebViewManager.x5Core = x5Core;
    }
}
