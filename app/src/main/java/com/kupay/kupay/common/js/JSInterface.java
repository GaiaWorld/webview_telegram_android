package com.kupay.kupay.common.js;

import android.content.Intent;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/27.
 * Callback interface for Android lifecycle calls.
 */
public interface JSInterface {
    /**
     * Dispatch incoming result to the correct fragment.
     *
     * @param requestCode request code
     * @param resultCode  the code of result,this mark is set by user,this will be used as mark.
     * @param data        Callback data from last Activity.
     */
    void onActivityResult(int requestCode, int resultCode, Intent data);

    /**
     * Activity's visibility changes from invisible to visible.
     */
    void onResume();
}
