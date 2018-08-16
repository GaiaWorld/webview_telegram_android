package org.telegram.util;

import android.content.Context;
import android.content.SharedPreferences;

import org.telegram.messenger.ApplicationLoader;

/**
 * Created by "iqos_jay@outlook.com" on 2018/7/21.
 */
public class PreferenceManager {

    public static ProxyInformation getLocalProxyInfo() {
        SharedPreferences sp = ApplicationLoader.applicationContext.getSharedPreferences("mainconfig", Context.MODE_PRIVATE);
        String proxy_ip = sp.getString("proxy_ip", "120.77.252.201");
        String proxy_pass = sp.getString("proxy_pass", "");
        String proxy_user = sp.getString("proxy_user", "");
        int proxy_port = sp.getInt("proxy_port", 1080);
        ProxyInformation info = new ProxyInformation();
        info.setIp(proxy_ip);
        info.setPassword(proxy_pass);
        info.setUserName(proxy_user);
        info.setPort(proxy_port);
        return info;
    }

    public static void saveProxySetting(ProxyInformation setting) {
        SharedPreferences.Editor editor = ApplicationLoader.applicationContext.getSharedPreferences("mainconfig", Context.MODE_PRIVATE).edit();
        editor.putString("proxy_ip", setting.getIp());
        editor.putString("proxy_pass", setting.getPassword());
        editor.putString("proxy_user", setting.getUserName());
        editor.putInt("proxy_port", setting.getPort());
        editor.putBoolean("proxy_enabled", true);
        editor.apply();
    }
}
