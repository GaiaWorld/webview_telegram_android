package com.kupay.kupay.base;


import com.kupay.kupay.util.ToastManager;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/22.
 * BaseView
 */
public interface BaseView {
    /**
     * Show the toast tip.
     *
     * @param resId the message's id of what would you like to tip.
     */
    void onToast(int resId);

    /**
     * Show the toast tip
     *
     * @param msg the message of what would you like to tip.
     */
    void onToast(String msg);

    /**
     * Show the toast tip
     *
     * @param msg      the message's id of what would you like to tip.
     * @param duration the message last time.
     */
    void onToast(int msg, @ToastManager.Duration int duration);

    /**
     * Show the toast tip
     *
     * @param msg      the message of what would you like to tip
     * @param duration the message last time.
     */
    void onToast(String msg, @ToastManager.Duration int duration);

    /**
     * Hide the content being prompted.
     */
    void onHideToast();
}
