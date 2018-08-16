package com.kupay.kupay.util;

import android.util.Log;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/22.
 * Logcat Manager
 */
public class Logger {
    private static final boolean DEBUG = true;

    /**
     * Print the logcat
     *
     * @param tag TAG
     * @param msg the message what would you like logged.
     */
    public static void verbose(String tag, String msg) {
        if (!DEBUG) return;
        Log.v(tag, msg);
    }

    /**
     * Print the logcat
     *
     * @param tag TAG
     * @param msg the message what would you like logged.
     */
    public static void debug(String tag, String msg) {
        if (!DEBUG) return;
        Log.d(tag, msg);
    }

    /**
     * Print the logcat
     *
     * @param tag TAG
     * @param msg the message what would you like logged.
     */
    public static void info(String tag, String msg) {
        if (!DEBUG) return;
        Log.i(tag, msg);
    }

    /**
     * Print the logcat
     *
     * @param tag TAG
     * @param msg the message what would you like logged.
     */
    public static void warn(String tag, String msg) {
        if (!DEBUG) return;
        Log.w(tag, msg);
    }

    /**
     * Print the logcat
     *
     * @param tag TAG
     * @param msg the message what would you like logged.
     */
    public static void error(String tag, String msg) {
        if (!DEBUG) return;
        Log.e(tag, msg);
    }

    /**
     * Print the logcat
     *
     * @param tag TAG
     * @param msg the message what would you like logged.
     */
    public static void wtf(String tag, String msg) {
        if (!DEBUG) return;
        Log.wtf(tag, msg);
    }
}
