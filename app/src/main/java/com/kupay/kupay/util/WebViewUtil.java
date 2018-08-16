package com.kupay.kupay.util;

import android.content.Context;
import android.webkit.WebView;

import com.kupay.kupay.R;


/**
 * Created by "iqos_jay@outlook.com" on 2018/6/21.
 * This tool is used to determine whether to use the Android's webView.
 */
public class WebViewUtil {
    private static final String SPLIT_MARK = "chrome/";//split the version by this mark

    /**
     * Get the version of the Android's WebView.
     *
     * @param webView Android's webView.
     * @return The version code of the Android's WebView.
     */
    private static int getWebViewVersionCode(WebView webView) {
        try {
            String userAgentString = webView.getSettings().getUserAgentString();
            String[] spArr = userAgentString.toLowerCase().split(SPLIT_MARK);
            String strVersion = spArr[spArr.length - 1];
            String result = strVersion.substring(0, strVersion.indexOf("."));
            return Integer.parseInt(result);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return 0;
    }

    /**
     * Should use Android's WebView.
     *
     * @param ctx Context
     * @return 1、true : Will use the Android's WebView. 2、false : Use the X5 Chrome instead of Android's WebView.
     */
    public static boolean shouldUseAndroidWebView(WebView webView, Context ctx) {
        int wbCode = getWebViewVersionCode(webView);//get the version of webView
        String minCode = ctx.getResources().getString(R.string.compile_web_view_version_code);
        //If this webView's version code is letter than value from config
        //The app will use the Android WebView,else use X5
        return wbCode >= Integer.parseInt(minCode);
    }

}
