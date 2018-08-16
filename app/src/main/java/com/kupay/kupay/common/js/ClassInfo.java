package com.kupay.kupay.common.js;

import java.lang.reflect.Method;
import java.util.HashMap;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/27.
 */
public class ClassInfo {
    private Class clazz;
    private HashMap<String, Method> methods; // 方法信息，键是方法名

    public ClassInfo(Class clazz) {
        this.clazz = clazz;
        if (null == getMethods()) {
            methods = new HashMap<>();
        }
    }

    public Class getClazz() {
        return clazz;
    }

    public HashMap<String, Method> getMethods() {
        return methods;
    }
}
