package com.kupay.kupay.base;

import android.app.Activity;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/22.
 * BasePresenter
 */
public abstract class BasePresenter<IV extends BaseView> {
    protected Activity mActivity;
    protected IV iv;//View's callback for update Activity UI

    /**
     * Constructor of BasePresenter.
     * All of the subs who extents this BasePresenter must implement this method.
     *
     * @param mActivity Activity,it is often used as context.
     */
    public BasePresenter(Activity mActivity) {
        this.mActivity = mActivity;
    }

    /**
     * Initialize the view of App's callback.
     *
     * @param iv Generic parameter IV impl.
     */
    public abstract void initView(IV iv);
}
