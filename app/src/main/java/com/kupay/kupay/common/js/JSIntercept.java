package com.kupay.kupay.common.js;

import android.content.Context;
import android.util.Base64;
import android.webkit.JavascriptInterface;
import com.kupay.kupay.base.BaseJSModule;

import java.io.File;
import java.io.FileOutputStream;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/27.
 * Android and js bridging files for js call the local underlying method.
 */
public class JSIntercept {

    public JSIntercept() {

    }

    @JavascriptInterface
    public void saveFile(String path, String base64Str) {
        try {
            Context context = (Context)JSEnv.getEnv(JSEnv.CONTEXT);
            String fullPath = "/data/data/" + context.getPackageName() + "/" + path;
            File f = new File(fullPath);
            if (!f.exists()) {
                new File(fullPath.substring(0, fullPath.lastIndexOf('/'))).mkdirs();
                f.createNewFile();
            }
            FileOutputStream stream = new FileOutputStream(f);
            byte[] data = Base64.decode(base64Str, Base64.NO_WRAP);
            stream.write(data);
            stream.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
