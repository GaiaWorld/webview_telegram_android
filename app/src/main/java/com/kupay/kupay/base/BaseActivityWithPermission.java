package com.kupay.kupay.base;

import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;
import android.support.annotation.NonNull;
import android.support.v7.app.AlertDialog;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/28.
 * BaseActivity with request permissions.
 * While Android's API level more than M(23),
 * some dangerous permissions must be requested dynamically,
 * such as "WRITE_EXTERNAL_STORAGE"、"CAMERA".....
 * If you operate directly without requested dynamically,
 * then your operation will fail and the application might crash.
 */
public abstract class BaseActivityWithPermission extends BaseActivity {
    private static final int REQUEST_PERMISSION_RESULT_CODE = 0x0ba7c;
    private RequestPermissionCallback callback;

    /**
     * Request all permissions you need.
     *
     * @param callback    the callback of request permission result.
     * @param permissions all permissions that you need.
     */
    protected final void requestNeedPermissions(RequestPermissionCallback callback, String... permissions) {
        if (null == permissions || 0 == permissions.length) return;
        if (null == callback) return;
        this.callback = callback;
        if (verifyPermission(permissions)) {
            callback.onPermissionGranted();
        } else {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                requestPermissions(permissions, REQUEST_PERMISSION_RESULT_CODE);
            }
        }
    }

    /**
     * Check whether all permissions has been obtained.
     *
     * @param permissions All permissions you request.
     * @return 1、true:granted 2、false:denied
     */
    private boolean verifyPermission(String... permissions) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            for (String permission : permissions) {
                if (PackageManager.PERMISSION_GRANTED != checkSelfPermission(permission)) {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * The user rejected the permission request,
     * displayed a dialog to guide the user to open the settings.
     */
    private void showPermissionDeniedDialog() {
        new AlertDialog.Builder(this)
                .setTitle("提示")
                .setMessage("当前程序运行缺少必要的权限，请前往设置开启")
                .setNegativeButton("取消", null)
                .setPositiveButton("去开启", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        jumpToSetting();
                    }
                })
                .setCancelable(false)
                .create()
                .show();
    }

    /**
     * jump to system setting
     */
    private void jumpToSetting() {
        Intent intent = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        Uri uri = Uri.fromParts("package", getPackageName(), null);
        intent.setData(uri);
        startActivity(intent);
    }

    /**
     * The result of request permissions callback.
     * There are only two function will be called by result:
     * onPermissionGranted:The user allow permission that you requested.
     * onPermissionDenied: The permission was refused.
     */
    protected interface RequestPermissionCallback {
        /**
         * Permission granted.
         */
        void onPermissionGranted();

        /**
         * Permission denied.
         */
        void onPermissionDenied();
    }


    /**
     * Callback for the result from requesting permissions. This method
     * is invoked for every call on {@link #requestPermissions(String[], int)}.
     * <p>
     * <strong>Note:</strong> It is possible that the permissions request interaction
     * with the user is interrupted. In this case you will receive empty permissions
     * and results arrays which should be treated as a cancellation.
     * </p>
     *
     * @param requestCode  The request code passed in {@link #requestPermissions(String[], int)}.
     * @param permissions  The requested permissions. Never null.
     * @param grantResults The grant results for the corresponding permissions
     *                     which is either {@link PackageManager#PERMISSION_GRANTED}
     *                     or {@link PackageManager#PERMISSION_DENIED}. Never null.
     * @see #requestPermissions(String[], int)
     */
    @Override
    public final void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        if (REQUEST_PERMISSION_RESULT_CODE == requestCode) {
            //verify the permission whether is allowed.
            if (verifyPermission(permissions)) {
                //permission granted.
                if (null != callback) {
                    callback.onPermissionGranted();
                }
            } else {
                //permission denied.
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                    if (null != callback) {
                        callback.onPermissionDenied();
                    }
                    if (0 != permissions.length) {
                        for (String permission : permissions) {
                            if (!shouldShowRequestPermissionRationale(permission)) {
                                this.showPermissionDeniedDialog();
                                break;
                            }
                        }
                    }
                }
            }
        } else {
            super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        }
    }
}
