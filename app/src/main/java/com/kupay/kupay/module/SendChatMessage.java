package com.kupay.kupay.module;

import android.content.Intent;

import com.kupay.kupay.base.BaseJSModule;
import com.kupay.kupay.bean.ProxyInformation;
import com.kupay.kupay.common.js.JSCallback;
import com.kupay.kupay.util.PreferenceManager;

import org.telegram.ui.LaunchActivity;

/**
 * Created by "iqos_jay@outlook.com" on 2018/7/19.
 */
public class SendChatMessage extends BaseJSModule {

    /**
     * 跳转到Telegram
     *
     * @param callbackId TS层调用的时候传递的参数、可以用来回调高层执行的状态
     */
    public void jumpToTelegram(int callbackId) {
        //Before jump to telegram chat tool,must set the proxy first,cause is There is China.
//        ProxyInformation localProxyInfo = PreferenceManager.getLocalProxyInfo();
//        LaunchActivity.setProxySetting(localProxyInfo.getIp(), localProxyInfo.getPort(), localProxyInfo.getUserName(), localProxyInfo.getPassword());
        ctx.startActivity(new Intent(ctx, LaunchActivity.class));
    }



    /**
     * TS层调用此方法可以刷新本地配置
     *
     * @param callbackId 回调高层的接口
     * @param proxyIp    代理IP
     * @param proxyPort  代理端口
     * @param userName   用户名
     * @param password   密码
     */
    public void setAndroidProxy(int callbackId, String proxyIp, int proxyPort, String userName, String password) {
        saveProxyConfig(proxyIp, proxyPort, userName, password);
        JSCallback.callJS(callbackId, JSCallback.SUCCESS, "修改代理配置成功");
    }

    /**
     * 把最新的代理配置存到本地
     *
     * @param proxyIp   代理IP
     * @param proxyPort 代理端口
     * @param userName  用户名
     * @param password  密码
     */
    private void saveProxyConfig(String proxyIp, int proxyPort, String userName, String password) {
        ProxyInformation proxyInfo = new ProxyInformation();
        proxyInfo.setIp(proxyIp);
        proxyInfo.setPort(proxyPort);
        proxyInfo.setUserName(userName);
        proxyInfo.setPassword(password);
        PreferenceManager.saveProxySetting(proxyInfo);
    }
}
