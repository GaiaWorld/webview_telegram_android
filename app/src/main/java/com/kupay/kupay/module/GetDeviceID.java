package com.kupay.kupay.module;

import android.Manifest;
import android.annotation.SuppressLint;
import android.content.Context;
import android.content.pm.PackageManager;
import android.support.v4.app.ActivityCompat;
import android.telephony.TelephonyManager;

import com.kupay.kupay.app.YNApplication;
import com.kupay.kupay.base.BaseJSModule;
import com.kupay.kupay.common.JSExecutable;
import com.kupay.kupay.common.js.JSCallback;
import com.kupay.kupay.common.js.JSEnv;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/27.
 * This class is used to get information from the device.
 */
public class GetDeviceID extends BaseJSModule {
    /**
     * Get the device's unique identifier
     */
    public static void getDeviceID(int cbID) {
        Context context = (Context) JSEnv.getEnv(JSEnv.CONTEXT);
        TelephonyManager tm = (TelephonyManager) context.getSystemService(Context.TELEPHONY_SERVICE);
        if (tm != null) {
            if (ActivityCompat.checkSelfPermission(YNApplication.getAppCtx(), Manifest.permission.READ_PHONE_STATE) != PackageManager.PERMISSION_GRANTED) {
                return;
            }
            @SuppressLint("HardwareIds")
            String id = tm.getDeviceId();
            JSCallback.callJS(cbID, JSCallback.SUCCESS, id);
        }
    }
}
