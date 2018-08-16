package com.kupay.kupay.iview;

import com.kupay.kupay.base.BaseView;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/22.
 */
public interface AppView extends BaseView {

    /**
     * Show the download dialog
     */
    void onShowDialog();

    /**
     * Update X5Core's download Progress
     *
     * @param progress current progress
     */
    void onShowProgress(int progress);

    /**
     * show the animation from local json file.
     */
    void onShowAnim() throws Exception;

    /**
     * Remove the ProgressDialog,cause is won't use any more.
     */
    void onRemoveProgressDialog();

    /**
     * Called when WebView load success.
     */
    void onCancelAnim();

    /**
     * setting x5 chrome's download progress,
     * there is a value for connect time out,
     * if the x5 chrome is in downloading,then will close the connect time out.
     *
     * @param downloading true:is downloading false : is not downloading
     */
    void onSetX5DownloadStatus(boolean downloading);
}
