package com.kupay.kupay.common.js;

import android.app.Activity;
import android.support.annotation.IntDef;
import android.support.annotation.Nullable;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/27.
 */
public class JSCallback {
    public final static int SUCCESS = 0;
    public final static int FAIL = 1;
    public final static int CALLBACK = 100;


    /**
     * params只接受整数，浮点数，字符串
     */
    public static void callJS(int listenerId, @StatusCode int statusCode, Object... params) {
        StringBuilder func = new StringBuilder("window['handle_Native_Message'](" + listenerId + ", " + statusCode);
        if (null != params)
            for (Object o : params) {
                if (Byte.class.isInstance(o)) {
                    int v = (Byte) o;
                    func.append(", ").append(v);
                } else if (Short.class.isInstance(o)) {
                    int v = (Short) o;
                    func.append(", ").append(v);
                } else if (Integer.class.isInstance(o)) {
                    int v = (Integer) o;
                    func.append(", ").append(v);
                } else if (Float.class.isInstance(o)) {
                    float v = (Float) o;
                    func.append(", ").append(v);
                } else if (Double.class.isInstance(o)) {
                    double v = (Double) o;
                    func.append(", ").append(v);
                } else if (Boolean.class.isInstance(o)) {
                    boolean v = (Boolean) o;
                    func.append(", ").append(v ? 1 : 0);
                } else if (String.class.isInstance(o)) {
                    String s = (String) o;
                    func.append(String.format(", '%s'", s));
                } else {
                    throwJS("Android", "CallJS", "Internal Error, CallJS params error!");
                    return;
                }
            }
        func.append(")");
        Activity activity = (Activity) JSEnv.getEnv(JSEnv.ACTIVITY);
        activity.runOnUiThread(new CallJSRunnable(func.toString()));
    }

    public static void throwJS(String className, String methodName, String message) {
        String func = String.format("handle_Native_ThrowError('%s', '%s', '%s'", className, methodName, message);
        Activity activity = (Activity) JSEnv.getEnv(JSEnv.ACTIVITY);
        activity.runOnUiThread(new CallJSRunnable(func));
    }

    /**
     * In order to make the passed parameter types safe,so we use custom annotations here.
     * When you want to send the parameter,the parameter must be defined in @StatusCode.
     * Else the warning will appear,but it can still run with the red warning,
     * cause is this just is a type checker instead of code.
     */
    @IntDef({SUCCESS, FAIL, CALLBACK})
    @Retention(RetentionPolicy.SOURCE)
    private @interface StatusCode {
    }
}
