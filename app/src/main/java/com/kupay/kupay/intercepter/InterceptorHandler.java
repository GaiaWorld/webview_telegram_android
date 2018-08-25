package com.kupay.kupay.intercepter;

import android.webkit.WebResourceResponse;

public interface InterceptorHandler {

    WebResourceResponse handle(Interceptor interceptor);

}
