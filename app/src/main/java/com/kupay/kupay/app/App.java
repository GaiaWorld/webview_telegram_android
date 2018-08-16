package com.kupay.kupay.app;

import android.app.ProgressDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.support.v7.app.AlertDialog;
import android.view.View;
import android.view.WindowManager;
import android.widget.LinearLayout;

import com.airbnb.lottie.LottieAnimationView;
import com.airbnb.lottie.LottieDrawable;
import com.kupay.kupay.R;
import com.kupay.kupay.base.BaseWebViewActivity;
import com.kupay.kupay.common.js.JSEnv;
import com.kupay.kupay.common.js.JSInterface;
import com.kupay.kupay.iview.AppView;
import com.kupay.kupay.presenter.AppPresenter;

public class App extends BaseWebViewActivity implements AppView {
    private LinearLayout mLlContent, mLlAnim;
    private LottieAnimationView mAnimView;
    private ProgressDialog mPdDldPro;
    private AppPresenter presenter = new AppPresenter(this);

    /**
     * Get the layout resource from XML.
     *
     * @return layout resource from XML.
     */
    @Override
    protected int getLayoutResources() {
        return R.layout.activity_main;
    }

    /**
     * As the method name said,this method is used to initialize views on this activity.
     */
    @Override
    protected void initViews() {
        mLlContent = (LinearLayout) findViewById(R.id.app_main_ll_content);
        mLlAnim = (LinearLayout) findViewById(R.id.app_main_ll_anim_parent);
        mAnimView = (LottieAnimationView) findViewById(R.id.app_main_anim_view);
        initProgressDialog();
    }

    /**
     * Initialize the ProgressDialog,create a new one.
     */
    private void initProgressDialog() {
        mPdDldPro = new ProgressDialog(this);
        mPdDldPro.setCancelable(false);
        mPdDldPro.setTitle("请稍等");
        mPdDldPro.setMessage("当前WebView版本太低，正在下载X5内核...");
        mPdDldPro.setMax(100);
        mPdDldPro.setProgressStyle(ProgressDialog.STYLE_HORIZONTAL);
    }

    /**
     * Initialize basic data.
     */
    @Override
    protected void init() {
        presenter.initView(this);
        super.createWebView();
        mLlContent.removeAllViews();
        mLlContent.addView(mWebView);
    }


    /**
     * Show the download dialog.
     */
    @Override
    public void onShowDialog() {
        if (null != mPdDldPro && !mPdDldPro.isShowing()) {
            mPdDldPro.show();
        }
    }

    /**
     * Update X5Core's download Progress
     *
     * @param progress current progress
     */
    @Override
    public void onShowProgress(int progress) {
        mPdDldPro.setProgress(progress);
    }

    /**
     * show the animation from local json file.
     */
    @Override
    public void onShowAnim() {
        mAnimView.setAnimation(getResources().getString(R.string.app_splash_anim_file_name));
        mAnimView.setRepeatCount(LottieDrawable.INFINITE);
        mAnimView.playAnimation();
    }

    /**
     * Remove the ProgressDialog,cause is won't use any more.
     */
    @Override
    public void onRemoveProgressDialog() {
        if (null != mPdDldPro) {
            mPdDldPro.dismiss();
        }
    }

    /**
     * Called when WebView load success.
     */
    @Override
    public void onCancelAnim() {
        mAnimView.cancelAnimation();
        mAnimView.setVisibility(View.GONE);
        mLlAnim.setVisibility(View.GONE);
    }

    /**
     * setting x5 chrome's download progress,
     * there is a value for connect time out,
     * if the x5 chrome is in downloading,then will close the connect time out.
     *
     * @param downloading true:is downloading false : is not downloading
     */
    @Override
    public void onSetX5DownloadStatus(boolean downloading) {
        mX5Chrome.setSetDownloadStatus(downloading);
    }

    /**
     * The webView load content success.
     */
    @Override
    public void onLoadFinished() {
        presenter.calculateTime();
    }

    /**
     * Connect time out.
     */
    @Override
    public void onLoadTimeOut() {
        try {
            new AlertDialog.Builder(this)
                    .setTitle("提示")
                    .setMessage("您与服务器的连接已经超时")
                    .setCancelable(false)
                    .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            dialog.dismiss();
                        }
                    })
                    .create()
                    .show();
        } catch (WindowManager.BadTokenException e) {
            e.printStackTrace();
        }
    }

    /**
     * Dispatch incoming result to the correct fragment.
     *
     * @param requestCode request code
     * @param resultCode  the code of result,this mark is set by user,this will be used as mark.
     * @param data        Callback data from last Activity.
     */
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        JSInterface jsImpl = JSEnv.getJsImpl();
        if (null != jsImpl) {
            jsImpl.onActivityResult(requestCode, resultCode, data);
        }
        /*if (QRCodeEnable) {
            IntentResult result = IntentIntegrator.parseActivityResult(requestCode, resultCode, data);
            if (result == null || result.getContents() == null) {
                JSCallback.callJS(JSQRCodeScanCallBackID, JSCallback.FAIL, "null");
                super.onActivityResult(requestCode, resultCode, data);
            } else {
                JSCallback.callJS(JSQRCodeScanCallBackID, JSCallback.SUCCESS, result.getContents());
            }
        }*/
    }


}