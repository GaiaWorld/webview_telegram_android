package com.kupay.kupay.base;

import android.app.Activity;
import android.content.Intent;

import com.github.dfqin.grantor.PermissionsUtil;
import com.kupay.kupay.common.JSExecutable;
import com.kupay.kupay.common.js.JSEnv;
import com.kupay.kupay.common.js.JSInterface;

/**
 * Created by "iqos_jay@outlook.com" on 2018/7/5.
 * BaseJSModule has implemented {@link JSExecutable},
 * it means the class which extends {@link BaseJSModule} will auto implement {@link JSExecutable},
 * it will be also auto add into the JSBridge,then we need not call {@link JSEnv#setClass(String,Class)} as well.
 * this class will define some basic views or methods,
 * such as : how to show tip on dialog when user refused the application's Permission.
 * Cause is it is unnecessary for us to define the same property and method in different code files.
 * Of course, if you don't need to use the request permission,
 * you can implements {@link JSExecutable} directly.
 */
public abstract class BaseJSModule implements JSExecutable, JSInterface {
    /**
     * TipInfo:When the application is missing the necessary permissions
     * are displayed to the user's prompt o message.
     */
    protected PermissionsUtil.TipInfo mTipInfo;
    /**
     * Activity could be used as context.
     */
    protected Activity ctx;

    /**
     * It's constructor will initialize some values.
     */
    public BaseJSModule() {
        ctx = (Activity) JSEnv.getEnv(JSEnv.ACTIVITY);
        mTipInfo = new PermissionsUtil.TipInfo("提示", getTipContentWithoutPermission(), "取消", "设置");
        JSEnv.setJsImpl(this);
    }

    /**
     * What would you like to prompt user "You Missed Permission".
     *
     * @return the message content you want to prompt user.
     */
    protected String getTipContentWithoutPermission() {
        return "当前应用缺少必要权限。\n \n 请点击 \"设置\"-\"权限\"-打开所需权限。";
    }

    /**
     * Activity's visibility changes from invisible to visible.
     */
    @Override
    public void onResume() {
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
    }
}
