package com.kupay.kupay.common.js;

import com.kupay.kupay.util.Logger;

import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.util.HashMap;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/27.
 */
public final class JSEnv {
    private static final String TAG = "JSEnv";
    /**
     * 环境串，用于全局取环境变量
     **/
    public final static String CONTEXT = "CONTEXT";
    public final static String WEBVIEW = "WEBVIEW";
    public final static String ACTIVITY = "ACTIVITY";

    /**
     * 环境映射表
     */
    private static HashMap<String, Object> envMap = new HashMap<>();
    /**
     * 对象映射表，键从1开始递增
     */
    private static HashMap<Integer, Object> objMap = new HashMap<>();
    /**
     * 类映射表，键是类名
     */
    private static HashMap<String, ClassInfo> clsMap = new HashMap<>();
    /**
     * 当本地执行的方法是涉及到Activity回传数据
     * 需要把{@link JSInterface}的当前实现类存下来、
     * 进行回调
     */
    private static JSInterface jsImpl;
    /**
     * 对象的键ID
     */
    private static int currID = 0;


    /**
     * 添加对象，获得对象的id
     */
    public static int addObject(Object o) {
        int id = ++currID;
        objMap.put(id, o);
        return id;
    }

    /**
     * 根据ID取对象
     */
    public static Object getObject(int id) {
        return objMap.get(id);
    }

    /**
     * 移除对象
     */
    public static void removeObject(int id) {
        objMap.remove(id);
    }

    /**
     * 设置环境
     */
    public static void setEnv(String key, Object o) {
        envMap.put(key, o);
    }

    /**
     * 获取环境对象
     */
    public static Object getEnv(String key) {
        return envMap.get(key);
    }

    /**
     * Put classes.
     *
     * @param className class's simple name.
     * @param clazz     class.
     */
    public static void setClass(String className, Class clazz) {
        ClassInfo info = new ClassInfo(clazz);
        clsMap.put(className, info);
        Method[] ms = clazz.getDeclaredMethods();
        for (Method m : ms) {
            info.getMethods().put(m.getName(), m);
        }
        System.out.println();
    }

    /**
     * 生成对象的实例，返回id
     */
    public static int newInstance(String className) throws Exception {
        ClassInfo info = clsMap.get(className);
        if (info == null) {
            throw new Exception("JSEnv.call class " + className + " don't find");
        }
        int id;
        try {
            @SuppressWarnings("unchecked")
            Constructor c = info.getClazz().getDeclaredConstructor();
            Object o = c.newInstance();
            id = addObject(o);
        } catch (Exception e) {
            e.printStackTrace();
            throw new Exception(e);
        }
        return id;
    }

    /**
     * 通用调用
     */
    public static Object call(String className, String methodName, int objectID, Object... params) throws Exception {
        Object obj = null;
        if (objectID > 0) {
            obj = getObject(objectID);
        }
        ClassInfo info = clsMap.get(className);
        if (info == null) {
            throw new Exception("JSEnv.call class " + className + " don't find");
        }

        Method m = info.getMethods().get(methodName);
        if (m == null) {
            throw new Exception("JSEnv.call method " + methodName + "in class " + className + " don't find");
        }
        Object r;
        try {
            r = m.invoke(obj, params);
        } catch (Exception e) {
            Logger.error(TAG, e.getMessage());
            throw e;
        }
        return r;
    }

    /**
     * setter
     *
     * @param jsImpl JSInterface的当前实现类
     */
    public static void setJsImpl(JSInterface jsImpl) {
        JSEnv.jsImpl = jsImpl;
    }

    /**
     * getter
     *
     * @return JSInterface的当前实现类
     */
    public static JSInterface getJsImpl() {
        return jsImpl;
    }
}
