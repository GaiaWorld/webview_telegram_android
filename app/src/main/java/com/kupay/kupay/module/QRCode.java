package com.kupay.kupay.module;

import android.Manifest;
import android.content.Intent;
import android.os.Build;
import android.support.annotation.NonNull;
import android.text.TextUtils;

import com.github.dfqin.grantor.PermissionListener;
import com.github.dfqin.grantor.PermissionsUtil;
import com.iqos.qrscanner.app.QRScannerActivity;
import com.kupay.kupay.base.BaseJSModule;
import com.kupay.kupay.common.js.JSCallback;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/27.
 * QRCode would be called by javaScript instead of java code.
 */
public class QRCode extends BaseJSModule {
    private int callbackId;

    public void scan(int callbackId) {
        this.callbackId = callbackId;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            PermissionsUtil.requestPermission(ctx, new PermissionListener() {
                @Override
                public void permissionGranted(@NonNull String[] permission) {
                    jumpToScanQRCode();
                }

                @Override
                public void permissionDenied(@NonNull String[] permission) {

                }
            }, Manifest.permission.CAMERA);
        } else {
            jumpToScanQRCode();
        }
    }

    /**
     * 跳转到扫码
     */
    private void jumpToScanQRCode() {
        Intent intent = new Intent(ctx, QRScannerActivity.class);
        ctx.startActivityForResult(intent, QRScannerActivity.SCAN_RESULT_CODE);
    }

    /**
     * What would you like to prompt user "You Missed Permission".
     *
     * @return the message content you want to prompt user.
     */
    @Override
    protected String getTipContentWithoutPermission() {
        return "扫描二维码必须使用到相机功能，请前往“设置”中打开相机权限";
    }

    /**
     * Dispatch incoming result to the correct fragment.
     *
     * @param requestCode request code
     * @param resultCode  the code of result,this mark is set by user,this will be used as mark.
     * @param data        Callback data from last Activity.
     */
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        switch (resultCode) {
            case QRScannerActivity.SCAN_RESULT_CODE:
                if (null == data) {
                    JSCallback.callJS(callbackId, JSCallback.FAIL, "空");
                    break;
                }
                String result = data.getStringExtra(QRScannerActivity.SCAN_RESULT);
                if (TextUtils.isEmpty(result)) {
                    JSCallback.callJS(callbackId, JSCallback.FAIL, "空");
                } else {
                    JSCallback.callJS(callbackId, JSCallback.SUCCESS, result);
                }
                break;
        }
    }
}
