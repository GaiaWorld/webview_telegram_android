package com.kupay.kupay.base;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;
import android.widget.Toast;

import com.kupay.kupay.common.JSExecutable;
import com.kupay.kupay.common.js.JSEnv;
import com.kupay.kupay.util.Logger;
import com.kupay.kupay.util.ToastManager;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/25.
 * BaseActivity
 */
public abstract class BaseActivity extends AppCompatActivity implements BaseView, JSExecutable {
    private static final String JS_CALLBACK = "handle_app_lifecycle_listener('%s')";
    private static final String ON_APP_RESUMED = "onAppResumed";
    private static final String ON_APP_PAUSED = "onAppPaused";
    private static final String SYSTEM_DIALOG_REASON_KEY = "reason";
    private static final String SYSTEM_DIALOG_REASON_HOME_KEY = "homekey";
    public static final int APP_RESULT_CODE = 134;
    protected static final int NO_LAYOUT = -1;//No Layout Resources.
    private boolean home;//是否是通过home键返回的界面

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.registerAppLifeListener();
        if (NO_LAYOUT != getLayoutResources()) {
            setContentView(getLayoutResources());
            this.initViews();
        }
        this.init();
    }

    /**
     * Get the layout resource from XML.
     *
     * @return layout resource from XML.
     */
    protected abstract int getLayoutResources();

    /**
     * As the method name said,this method is used to initialize views on this activity.
     */
    protected abstract void initViews();

    /**
     * Initialize basic data.
     */
    protected abstract void init();

    @Override
    protected void onResume() {
        super.onResume();
        if (isHome()) {
            setHome(false);
            gotoForeground();
        }
    }

    /**
     * Show the toast tip
     *
     * @param resId the message's id of what would you like to tip
     */
    @Override
    public void onToast(int resId) {
        this.onToast(getResources().getString(resId));
    }

    /**
     * Show the toast tip
     *
     * @param msg the message of what would you like to tip
     */
    @Override
    public void onToast(String msg) {
        this.onToast(msg, Toast.LENGTH_SHORT);
    }

    /**
     * Show the toast tip
     *
     * @param msg      the message of what would you like to tip
     * @param duration the message last time.
     */
    @Override
    public void onToast(String msg, @ToastManager.Duration int duration) {
        ToastManager.toast(this, msg, duration);
    }

    /**
     * Show the toast tip
     *
     * @param msg      the message's id of what would you like to tip.
     * @param duration the message last time.
     */
    @Override
    public void onToast(int msg, int duration) {
        this.onToast(getResources().getString(msg), duration);
    }

    /**
     * Hide the content being prompted.
     */
    @Override
    public void onHideToast() {
        ToastManager.hideToast();
    }

    /**
     * Register the broadcast receiver.
     */
    private void registerAppLifeListener() {
        IntentFilter filter = new IntentFilter();
        filter.addAction(Intent.ACTION_SCREEN_ON);//亮屏
        filter.addAction(Intent.ACTION_SCREEN_OFF);//锁屏
        filter.addAction(Intent.ACTION_USER_PRESENT);//解锁屏幕
        filter.addAction(Intent.ACTION_CLOSE_SYSTEM_DIALOGS);
        registerReceiver(mBackgroundReceiver, filter);
    }

    /**
     * mBackgroundReceiver is a listener to listen the application's lifecycle
     * when user lock the screen and press home key,the event will be push to ts.
     */
    private BroadcastReceiver mBackgroundReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            String action = intent.getAction();
            if (TextUtils.isEmpty(action)) return;
            switch (action) {
                //亮屏
                case Intent.ACTION_SCREEN_ON:
                    gotoBackground();
                    break;
                //锁屏
                case Intent.ACTION_SCREEN_OFF:
                    break;
                //解锁屏幕
                case Intent.ACTION_USER_PRESENT:
                    gotoForeground();
                    break;
                case Intent.ACTION_CLOSE_SYSTEM_DIALOGS:
                    String reason = intent.getStringExtra(SYSTEM_DIALOG_REASON_KEY);
                    if (null != reason) {
                        if (reason.equals(SYSTEM_DIALOG_REASON_HOME_KEY)) {
                            if (isHome()) return;
                            setHome(true);
                            gotoBackground();
                        }
                    }
                    break;
            }
        }
    };

    /**
     * App已经进入后台
     */
    private void gotoBackground() {
        Logger.error("BaseActivity", "App进入后台");
        try {
            android.webkit.WebView webView = (android.webkit.WebView) JSEnv.getEnv(JSEnv.WEBVIEW);
            webView.evaluateJavascript(String.format(JS_CALLBACK, ON_APP_PAUSED), null);
        } catch (ClassCastException e) {
            com.tencent.smtt.sdk.WebView webView = (com.tencent.smtt.sdk.WebView) JSEnv.getEnv(JSEnv.WEBVIEW);
            webView.evaluateJavascript(String.format(JS_CALLBACK, ON_APP_PAUSED), null);
            e.printStackTrace();
        }
    }

    /**
     * App进入前台
     */
    private void gotoForeground() {
        Logger.error("BaseActivity", "App进入前台");
        try {
            android.webkit.WebView webView = (android.webkit.WebView) JSEnv.getEnv(JSEnv.WEBVIEW);
            webView.evaluateJavascript(String.format(JS_CALLBACK, ON_APP_RESUMED), null);
        } catch (ClassCastException e) {
            com.tencent.smtt.sdk.WebView webView = (com.tencent.smtt.sdk.WebView) JSEnv.getEnv(JSEnv.WEBVIEW);
            webView.evaluateJavascript(String.format(JS_CALLBACK, ON_APP_RESUMED), null);
            e.printStackTrace();
        }
    }

    public boolean isHome() {
        return home;
    }

    public void setHome(boolean home) {
        this.home = home;
    }
}

