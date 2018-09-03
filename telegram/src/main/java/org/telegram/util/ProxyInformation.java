package org.telegram.util;

/**
 * Created by "iqos_jay@outlook.com" on 2018/7/21.
 */
public class ProxyInformation {
    private String ip;
    private int port;
    private String userName;
    private String password;

    public String getIp() {
        return ip;
    }

    public ProxyInformation setIp(String ip) {
        this.ip = ip;
        return this;
    }

    public int getPort() {
        return port;
    }

    public ProxyInformation setPort(int port) {
        this.port = port;
        return this;
    }

    public String getUserName() {
        return userName;
    }

    public ProxyInformation setUserName(String userName) {
        this.userName = userName;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public ProxyInformation setPassword(String password) {
        this.password = password;
        return this;
    }
}
