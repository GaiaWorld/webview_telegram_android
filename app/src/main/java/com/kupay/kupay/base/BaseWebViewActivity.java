package com.kupay.kupay.base;

import android.graphics.PixelFormat;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;

import com.kupay.kupay.R;
import com.kupay.kupay.callback.WebViewLoadProgressCallback;
import com.kupay.kupay.common.WebViewManager;
import com.kupay.kupay.common.js.JSEnv;
import com.kupay.kupay.util.Logger;
import com.kupay.kupay.widget.AndroidWebView;
import com.kupay.kupay.widget.X5Chrome;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/22.
 * BaseWebViewActivity
 */
public abstract class BaseWebViewActivity extends BaseActivity implements WebViewLoadProgressCallback {
    private AndroidWebView mAndroidWebView/*Google Android WebView*/;
    protected X5Chrome mX5Chrome/*X5 Chrome*/;
    protected View mWebView;
    public static boolean QRCodeEnable;//二维码扫描
    public static int JSQRCodeScanCallBackID = -1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Window window = getWindow();
        //设置主界面背景颜色
        Drawable drawable = getResources().getDrawable(R.drawable.main_app_background);
        window.setBackgroundDrawable(drawable);
        window.setFormat(PixelFormat.TRANSLUCENT);
        // 避免输入法界面弹出后遮挡输入光标的问题
        window.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE | WindowManager.LayoutParams.SOFT_INPUT_STATE_HIDDEN);
    }

    /**
     * Create a new WebView to show data
     */
    protected final void createWebView() {
        boolean x5Core = WebViewManager.isX5Core();
        JSEnv.setEnv(JSEnv.CONTEXT, this);
        JSEnv.setEnv(JSEnv.ACTIVITY, this);
        if (!x5Core) {
            mAndroidWebView = new AndroidWebView(this);
            mAndroidWebView.setLoadCallback(this);
            mWebView = mAndroidWebView;
        } else {
            mX5Chrome = new X5Chrome(this);
            mX5Chrome.setLoadCallback(this);
            mWebView = mX5Chrome;
        }
        Logger.verbose("Base", x5Core ? "x5" : "系统");
    }


    /**
     * Activity生命周期->销毁
     */
    @Override
    protected void onDestroy() {
        if (null != mX5Chrome)
            mX5Chrome.destroy();
        if (null != mAndroidWebView)
            mAndroidWebView.destroy();
        super.onDestroy();
    }
}
