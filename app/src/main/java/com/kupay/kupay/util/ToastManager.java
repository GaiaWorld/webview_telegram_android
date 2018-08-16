package com.kupay.kupay.util;

import android.content.Context;
import android.support.annotation.IntDef;
import android.text.TextUtils;
import android.widget.Toast;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

import static android.widget.Toast.LENGTH_LONG;
import static android.widget.Toast.LENGTH_SHORT;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/25.
 * Prevent Toast from playing messages all the time,
 * So use this manager to show tip.
 */
public class ToastManager {
    /**
     * Define the last time of toast tip,
     * if you wanna to show tip,
     * the param of duration must be included in this enum.
     */
    @IntDef({LENGTH_SHORT, LENGTH_LONG})
    @Retention(RetentionPolicy.SOURCE)
    public @interface Duration {
    }

    private static Toast sToast;

    /**
     * Tip user message by toast tip.
     *
     * @param ctx Context
     * @param msg the message what would you like tip.
     */
    public static void toast(Context ctx, String msg) {
        toast(ctx, msg, LENGTH_SHORT);
    }

    /**
     * Tip user message by toast tip.
     *
     * @param ctx      Context
     * @param msg      the message what would you like tip.
     * @param duration the last time of tip.
     */
    public static void toast(Context ctx, String msg, @Duration int duration) {
        if (null == ctx || TextUtils.isEmpty(msg)) return;
        if (null == sToast)
            sToast = Toast.makeText(ctx, msg, duration);
        else
            sToast.setText(msg);
        sToast.show();
    }

    /**
     * No ever what message is showing,when you call this method will hide the tip.
     */
    public static void hideToast() {
        if (null != sToast) {
            sToast.cancel();
        }
    }
}
