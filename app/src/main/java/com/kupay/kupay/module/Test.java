package com.kupay.kupay.module;

import com.kupay.kupay.base.BaseJSModule;
import com.kupay.kupay.common.js.JSCallback;
import com.kupay.kupay.util.Logger;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/27.
 * This class is test and remove other resources which is useless.
 */
public class Test extends BaseJSModule {
    public Test() {
        Logger.verbose("TBSWebview", "Test.Test()");
    }

    public void testCallback(int id, int cbID) {
        Logger.verbose("TBSWebview", String.format("Test.testCallback(%s", cbID));
        JSCallback.callJS(cbID, JSCallback.CALLBACK, "Android Test.testCallback 1", cbID);
        JSCallback.callJS(cbID, JSCallback.CALLBACK, "Android Test.testCallback 2", cbID);
        JSCallback.callJS(cbID, JSCallback.CALLBACK, "Android Test.testCallback 3", cbID);
    }

    public void testInstance(int cbID, int a, int b, float c, double d, String s) {
        Logger.verbose("TBSWebview", String.format("Test.testCallback(%s, %s, %s, %s, %s, %s", cbID, a, b, c, d, s));
        JSCallback.callJS(cbID, JSCallback.SUCCESS, "Android Test.testInstance", a, b, c, d, s);
    }

    public static void testStatic(int cbID, int a, int b, float c, double d, String s) {
        Logger.verbose("TBSWebview", String.format("Test.callStatic(%s, %s, %s, %s, %s, %s", cbID, a, b, c, d, s));
        JSCallback.callJS(cbID, JSCallback.SUCCESS, "Android Test.callStatic", a, b, c, d, s);
    }
}
