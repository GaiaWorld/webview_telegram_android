package com.kupay.kupay.interceptor;

import android.webkit.WebResourceResponse;

public interface InterceptorHandler {

    WebResourceResponse handle(Interceptor interceptor);

}
