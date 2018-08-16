package com.kupay.kupay.presenter;

import android.app.Activity;
import android.app.ProgressDialog;
import android.content.Intent;
import android.os.Handler;
import android.os.Message;
import android.widget.Toast;

import com.tencent.smtt.sdk.QbSdk;
import com.tencent.smtt.sdk.TbsListener;
import com.kupay.kupay.R;
import com.kupay.kupay.app.SplashActivity;
import com.kupay.kupay.base.BasePresenter;
import com.kupay.kupay.common.WebViewManager;
import com.kupay.kupay.iview.AppView;
import com.kupay.kupay.util.Logger;

import java.lang.ref.WeakReference;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/22.
 * AppPresenter
 */
public class AppPresenter extends BasePresenter<AppView> {
    private static final String TAG = AppPresenter.class.getSimpleName();
    private static final int DOWNLOAD_START = 0;//Handler index->start download
    private static final int UPDATE_PROGRESS = 1;//Handler index->is downloading
    private static final int DOWNLOAD_COMPLETE = 2;//Handler index->download complete
    private static final int INSTALL_COMPLETE = 3;//Handler index->install complete
    private MyHandler handler = new MyHandler(this);
    private ProgressDialog mPdInstall;//this dialog is used to show user we're installing x5 chrome.
    private int minTime;//the time for animation.
    private long startTime;//get the value when constructor is called.
    private boolean downloading;//is downloading status.


    /**
     * Constructor of BasePresenter.
     * All of the subs who extents this BasePresenter must implement this method.
     *
     * @param mActivity Activity,it is often used as context.
     */
    public AppPresenter(Activity mActivity) {
        super(mActivity);
        setDownloading(false);
        startTime = System.currentTimeMillis();
    }

    /**
     * Initialize the view of App's callback.
     *
     * @param appView Generic parameter IV impl.
     */
    @Override
    public void initView(AppView appView) {
        super.iv = appView;
        this.initStartTime();
        this.prepareShowAnim();
        this.showProgress();
    }

    /**
     * prepare to show the animation from the local json file.
     */
    private void prepareShowAnim() {
        if (shouldShowAnim()) {
            try {
                iv.onShowAnim();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    /**
     * Initialize time.
     * It will used to calculate how long does animation takes.
     */
    private void initStartTime() {
        if (!shouldShowAnim()) {
            minTime = 0;
        } else {
            minTime = Integer.parseInt(mActivity.getResources().getString(R.string.launch_animation_least_last_time));
            minTime = minTime < 0 ? 0 : minTime;
            minTime = minTime > 5000 ? 5000 : minTime;
        }
    }

    /**
     * Display the current download progress.
     */
    private void showProgress() {
        if (!shouldShowProgress()) return;
        if (!WebViewManager.isX5Core()) return;
        QbSdk.setTbsListener(mTbsDownloadListener);
        QbSdk.setDownloadWithoutWifi(downloadWithoutWifiEnabled());
    }

    /**
     * Whether to allow download in non-wifi environment.
     *
     * @return 1、true : allow 2、false : refuse.
     */
    private boolean downloadWithoutWifiEnabled() {
        return "1".equals(mActivity.getResources().getString(R.string.whether_to_allow_download_in_non_wifi_environment));
    }

    /**
     * Determine whether should show download progress.
     *
     * @return true for show progress、false for not
     */
    private boolean shouldShowProgress() {
        return "1".equals(mActivity.getResources().getString(R.string.allow_show_x5_core_download_progress));
    }

    /**
     * Determine whether show animation.
     *
     * @return true for show animation、false for not
     */
    private boolean shouldShowAnim() {
        return "1".equals(mActivity.getResources().getString(R.string.whether_show_launch_animation));
    }

    /**
     * Listener of download X5Core
     */
    private TbsListener mTbsDownloadListener = new TbsListener() {
        @Override
        public void onDownloadFinish(int i) {
            if (100 == i && isDownloading()) {
                handler.sendEmptyMessage(DOWNLOAD_COMPLETE);
            }
        }

        @Override
        public void onInstallFinish(int i) {
            Logger.verbose(TAG, String.valueOf(i));
            if (isDownloading()) {
                handler.sendEmptyMessage(INSTALL_COMPLETE);
            }
        }

        @Override
        public void onDownloadProgress(int i) {
            Logger.info(TAG, "当前下载进度 " + i);
            if (isDownloading()) {
                Message msg = new Message();
                msg.what = UPDATE_PROGRESS;
                msg.arg1 = i;
                handler.sendMessage(msg);
            } else {
                handler.sendEmptyMessage(DOWNLOAD_START);
                setDownloading(true);
            }
        }
    };

    /**
     * Calculate how long does initialize takes time,
     * cause is there is a local configuration to decide the animation will last ___ at least,
     * so if the time less than value from configuration,
     * then the animation will continue for a while until it reaches the value from configuration.
     */
    public void calculateTime() {
        long spendTime = System.currentTimeMillis() - startTime;
        if (spendTime > minTime) {
            iv.onCancelAnim();
        } else {
            long delayMillis = minTime - spendTime;
            new Handler().postDelayed(new Runnable() {
                @Override
                public void run() {
                    iv.onCancelAnim();
                }
            }, delayMillis);
        }
    }

    /**
     * getter
     *
     * @return 1、true:is downloading 2:is not downloading
     */
    private boolean isDownloading() {
        return downloading;
    }

    /**
     * setter
     *
     * @param downloading 1、true:is downloading 2:is not downloading
     */
    private void setDownloading(boolean downloading) {
        this.downloading = downloading;
        if (null != iv) {
            iv.onSetX5DownloadStatus(downloading);
        }
    }

    /**
     * 重新启动App -> 杀进程,会短暂黑屏
     */
    private void restartApp() {
        Intent intent = new Intent(mActivity, SplashActivity.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        mActivity.startActivity(intent);
        android.os.Process.killProcess(android.os.Process.myPid());
    }

    /**
     * Initialize the dialog of installing progress,
     * while download success,we'll display this dialog to user.
     */
    private void initInstallDialog() {
        if (null != mPdInstall) return;//make sure the dialog only be initialized once.
        mPdInstall = new ProgressDialog(mActivity);
        mPdInstall.setTitle("请稍等");
        mPdInstall.setMessage("现在安装X5内核...\n安装完成之后将会自动重启");
        mPdInstall.setCancelable(true);
        mPdInstall.setCanceledOnTouchOutside(false);
        mPdInstall.setProgressStyle(ProgressDialog.STYLE_SPINNER);
    }

    /**
     * Tell user the x5 chrome is installing when download complete.
     * Else user might think the application is not response.
     */
    private void showInstallingTip() {
        iv.onToast("下载已经完成，正在准备安装...", Toast.LENGTH_LONG);
        if (null != mPdInstall && !mPdInstall.isShowing()) {
            mPdInstall.show();
        }
    }

    /**
     * When this method is called,it means the x5 chrome has been installed.
     * So we can remove some view which is useless,it could save the memory.
     */
    private void finishInstall() {
        iv.onToast("安装已经完成，现在重启");
        if (null != mPdInstall && mPdInstall.isShowing()) {
            mPdInstall.dismiss();
        }
        this.restartApp();
    }

    /**
     * Handler used to update UI
     */
    private static class MyHandler extends Handler {
        private WeakReference<AppPresenter> weak;

        MyHandler(AppPresenter pre) {
            weak = new WeakReference<>(pre);
        }

        @Override
        public void handleMessage(Message msg) {
            AppPresenter pre = weak.get();
            if (null == pre || null == pre.iv) return;
            switch (msg.what) {
                //download start
                case DOWNLOAD_START:
                    pre.iv.onShowDialog();
                    pre.initInstallDialog();
                    break;
                //downloading...update progress
                case UPDATE_PROGRESS:
                    pre.iv.onShowProgress(msg.arg1);
                    break;
                //downloading...update progress
                case DOWNLOAD_COMPLETE:
                    pre.iv.onRemoveProgressDialog();
                    pre.showInstallingTip();
                    break;
                //install complete
                case INSTALL_COMPLETE:
                    pre.finishInstall();
                    break;
            }
        }
    }
}
