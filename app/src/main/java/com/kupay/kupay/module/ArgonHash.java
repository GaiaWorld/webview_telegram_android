package com.kupay.kupay.module;

import android.app.ProgressDialog;
import android.os.AsyncTask;
import android.text.TextUtils;

import com.kupay.kupay.base.BaseJSModule;
import com.kupay.kupay.common.js.JSCallback;

import java.io.UnsupportedEncodingException;
import java.lang.ref.WeakReference;

import de.wuthoehle.argon2jni.Argon2;
import de.wuthoehle.argon2jni.EncodedArgon2Result;
import de.wuthoehle.argon2jni.SecurityParameters;

/**
 * Created by "iqos_jay@outlook.com" on 2018/7/17.
 * ArgonHash.
 */
public class ArgonHash extends BaseJSModule {
    private int callbackId;
    private int t, m, p, type, hashLen;
    private String pwd, salt;
    private final ProgressDialog dialog;

    public ArgonHash() {
        dialog = new ProgressDialog(ctx);
        dialog.setProgressStyle(ProgressDialog.STYLE_SPINNER);
        dialog.setCancelable(false);
        dialog.setTitle("请稍等...");
        dialog.setMessage("正在计算Hash值");
    }

    /**
     * 计算Argon2 Hash
     *
     * @param callbackId js调用此方法的回调Id
     * @param t          迭代次数
     * @param m          内存，单位：KB
     * @param p          并行数量
     * @param pwd        密码
     * @param salt       盐
     * @param type       算法类型(0 1 2)
     * @param hashLen    结果长度
     */
    public void getArgon2Hash(int callbackId, int t, int m, int p, String pwd, String salt, int type, int hashLen) {
        this.callbackId = callbackId;
        this.t = t;
        this.m = m;
        this.p = p;
        this.type = type;
        this.hashLen = hashLen;
        this.pwd = pwd;
        this.salt = salt;
        new CalcHashTask(this).execute();
    }

    /**
     * 计算可能会是一个耗时的操作
     * 防止ANR的出现以及内存泄露的出现
     * 使用静态内部类异步执行任务
     */
    private static class CalcHashTask extends AsyncTask<Void, Void, String> {
        private WeakReference<ArgonHash> weak;

        private CalcHashTask(ArgonHash hash) {
            weak = new WeakReference<>(hash);
        }

        @Override
        protected void onPreExecute() {
            ArgonHash hash = weak.get();
            if (null == hash) return;
            if (!hash.dialog.isShowing()) {
                hash.dialog.show();
            }
        }

        @Override
        protected String doInBackground(Void... voids) {
            try {
                ArgonHash hash = weak.get();
                if (null == hash) return "";
                int version = Argon2.VersionIdentifiers.VERSION_13;
                SecurityParameters securityParameters = new SecurityParameters(hash.t, hash.m, hash.p);
                Argon2 argon = new Argon2(securityParameters, hash.hashLen, hash.type, version);
                EncodedArgon2Result result = argon.argon2_hash(hash.pwd.getBytes("US-ASCII"), hash.salt.getBytes("US-ASCII"));
                return hash.bytesToHex(result.getResult());
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
                return "";
            }
        }

        @Override
        protected void onPostExecute(String s) {
            ArgonHash hash = weak.get();
            if (null == hash) return;
            if (hash.dialog.isShowing()) {
                hash.dialog.dismiss();
            }
            if (TextUtils.isEmpty(s))
                JSCallback.callJS(hash.callbackId, JSCallback.FAIL, "");
            else
                JSCallback.callJS(hash.callbackId, JSCallback.SUCCESS, s);
        }
    }


    private String byteToHex(byte value) {
        // String representation of all possible values of a nibble
        // alphabet[0] = 0, ..., alphabet[15] = f
        String alphabet = "0123456789abcdef";
        return String.valueOf(alphabet.charAt((value >> 4) & 0xF)) + alphabet.charAt(value & 0xF);
    }

    private String bytesToHex(byte[] value) {
        StringBuilder wholeString = new StringBuilder();
        for (byte element : value) {
            wholeString.append(byteToHex(element));
        }
        return wholeString.toString();
    }
}
