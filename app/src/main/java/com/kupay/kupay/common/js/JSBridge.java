package com.kupay.kupay.common.js;

import android.webkit.JavascriptInterface;

import com.kupay.kupay.common.JSExecutable;
import com.kupay.kupay.util.CodeUtil;
import com.kupay.kupay.util.ContainerUtil;
import com.kupay.kupay.util.Logger;

import org.json.JSONArray;

import java.util.List;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/27.
 * Android and js bridging files for js call the local underlying method.
 */
public class JSBridge {
    private static final String TAG = JSBridge.class.getName();
    private static final String METHOD_INIT = "init";//method name->init
    private static final String METHOD_CLOSE = "close";//method name->close

    /**
     * Constructor used to initialize classes that would be called by JS.
     * Get all classes from the project which implemented the {@link JSExecutable},
     * and put these classes into the JSBridge.
     * The file is needn't modify anymore,while you want add new features,
     * just make the class implement {@link JSExecutable}.
     */
    public JSBridge() {
        List<Class> classes = CodeUtil.getAllClassByInterface(JSExecutable.class);
        if (ContainerUtil.isNullOrEmpty(classes)) return;
        for (Class clazz : classes) {
            JSEnv.setClass(clazz.getSimpleName(), clazz);
        }
    }

    /**
     * Called when js web wanna to call local function,
     * this class isn't created by me,other parameter will be filled after a while.
     *
     * @param className  Class's name that was called.
     * @param methodName Class's method that was called.
     */
    @JavascriptInterface
    public void postMessage(String className, String methodName, int nativeID, int listenerID, String jsonArray) {
        try {
            JSONArray js = new JSONArray(jsonArray);
            Object[] params = new Object[1 + js.length()];
            params[0] = listenerID;
            for (int i = 0; i < js.length(); i++) {
                params[i + 1] = js.get(i);
            }
            switch (methodName) {
                case METHOD_INIT:
                    int id = JSEnv.newInstance(className);
                    JSCallback.callJS(listenerID, JSCallback.SUCCESS, id);
                    break;
                case METHOD_CLOSE:
                    JSEnv.removeObject(nativeID);
                    JSCallback.callJS(listenerID, JSCallback.SUCCESS);
                    break;
                default:
                    Object obj = JSEnv.call(className, methodName, nativeID, params);
                    Logger.info(TAG, obj.toString());
                    break;
            }
        } catch (Exception e) {
            JSCallback.throwJS(className, methodName, e.getMessage());
        }
    }
}
