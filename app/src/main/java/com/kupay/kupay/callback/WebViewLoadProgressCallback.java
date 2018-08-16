package com.kupay.kupay.callback;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/27.
 * This callback is used to listen the progress of web.
 */
public interface WebViewLoadProgressCallback {
    /**
     * The webView load content success.
     */
    void onLoadFinished();

    /**
     * Connect time out.
     */
    void onLoadTimeOut();
}
