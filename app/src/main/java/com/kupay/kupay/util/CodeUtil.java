package com.kupay.kupay.util;

import com.kupay.kupay.app.YNApplication;

import java.lang.reflect.Array;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import dalvik.system.BaseDexClassLoader;
import dalvik.system.DexFile;

/**
 * Created by "iqos_jay@outlook.com" on 2018/7/4.
 * CodeUtil is used to get all sub class which implements base interface.
 */
public class CodeUtil {

    /**
     * Get all classes which implements the interface.
     *
     * @param clazz the interface
     * @return All classes.
     */
    @SuppressWarnings("unchecked")
    public static List<Class> getAllClassByInterface(Class clazz) {
        List<Class> result = new ArrayList();
        try {
            //获得当前包以及子包下的所有类(android中用)
            List<Class> allClass = getClasses(clazz);
            for (Class cls : allClass) {
                if (clazz.isAssignableFrom(cls)) {
                    //if the class implements clazz,there will add the class into the list,
                    //at last,we can get the list with all sub class which implements clazz.
                    if (!clazz.equals(cls)) {
                        result.add(cls);
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    /**
     * Get all classes from the package name's path.
     *
     * @param clazz class.
     * @return All classes that is found in path you assign.
     * @throws ClassNotFoundException An ClassNotFoundException has occurred,
     *                                such as a file that does not exist
     *                                or doesn't have permission to access it.
     */
    private static List<Class> getClasses(Class<?> clazz) throws ClassNotFoundException {
        ArrayList<Class> classes = new ArrayList<>();
        List<DexFile> dexFiles = new ArrayList<>();
        try {
            BaseDexClassLoader classLoader = ((BaseDexClassLoader) Thread.currentThread().getContextClassLoader());
            Field pathListField = classLoader.getClass().getSuperclass().getDeclaredField("pathList");
            pathListField.setAccessible(true);
            Object pathList = pathListField.get(classLoader);
            Field dexElementsField = pathList.getClass().getDeclaredField("dexElements");
            dexElementsField.setAccessible(true);
            Object dexElements = dexElementsField.get(pathList);
            int dexLength = Array.getLength(dexElements);
            Field dexFileField = null;
            for (int i = 0; i < dexLength; i++) {
                Object dexElement = Array.get(dexElements, i);
                if (null == dexFileField) {
                    dexFileField = dexElement.getClass().getDeclaredField("dexFile");
                    dexFileField.setAccessible(true);
                }
                DexFile dexFile = (DexFile) dexFileField.get(dexElement);
                if (null != dexFile) {
                    dexFiles.add(dexFile);
                }
            }
            for (DexFile file : dexFiles) {
                for (Enumeration<String> entries = file.entries(); entries.hasMoreElements(); ) {
                    final String s1 = entries.nextElement();
                    if (s1.contains(YNApplication.getAppCtx().getPackageName())) {
                        if (clazz.isAssignableFrom(Class.forName(s1))) {
                            classes.add(Class.forName(s1));
                        }
                    }
                }
            }
        } catch (NoSuchFieldException | IllegalAccessException e) {
            e.printStackTrace();
        }
        return classes;
    }

}
