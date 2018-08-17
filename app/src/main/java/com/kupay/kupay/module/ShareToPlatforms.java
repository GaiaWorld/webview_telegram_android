package com.kupay.kupay.module;

import android.Manifest;
import android.content.ComponentName;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Environment;
import android.support.annotation.NonNull;

import com.github.dfqin.grantor.PermissionListener;
import com.github.dfqin.grantor.PermissionsUtil;
import com.iqos.qrscanner.utils.QRCodeUtils;
import com.kupay.kupay.R;
import com.kupay.kupay.base.BaseJSModule;
import com.kupay.kupay.common.js.JSCallback;
import com.kupay.kupay.util.FileUtil;
import com.kupay.kupay.util.Logger;

import java.io.File;
import java.util.HashMap;

import cn.sharesdk.framework.Platform;
import cn.sharesdk.framework.PlatformActionListener;
import cn.sharesdk.line.Line;
import cn.sharesdk.onekeyshare.OnekeyShare;
import cn.sharesdk.tencent.qq.QQ;
import cn.sharesdk.tencent.qzone.QZone;
import cn.sharesdk.wechat.friends.Wechat;
import cn.sharesdk.wechat.moments.WechatMoments;

/**
 * Created by "iqos_jay@outlook.com" on 2018/7/16.
 * ShareToPlatforms is a bridge,it will be called by js.
 */
public class ShareToPlatforms extends BaseJSModule {
    private static final String TAG = "ShareToPlatforms";
    private static final int TYPE_IMAGE = 1;//分享的种类->图片
    private static final int TYPE_TEXT = 2;//分享的种类->文本
    private static final int PLATFORM_ALL = -1;//分享到的平台->所有平台(此时可以直接调用本地的分享UI)
    private static final int PLATFORM_WE_CHAT = 1;//分享到的平台->微信
    private static final int PLATFORM_MOMENTS = 2;//分享到的平台->朋友圈
    private static final int PLATFORM_Q_ZONE = 3;//分享到的平台->QQ空间
    private static final int PLATFORM_QQ = 4;//分享到的平台->QQ
    private static final int PLATFORM_LINE = 5;//分享到的平台->LINE
    private int callbackId;
    private int platform;

    /**
     * ShareQRCode
     *
     * @param callbackId js callback's id.
     * @param content    The qrCode's content,create a qrCode by the content.
     * @param type       the startShareText type,it could be "image","text","url"...and so on.
     * @param platform   which platform would you like to startShareText.
     */
    public void shareContent(int callbackId, final String content, final int type, final int platform) {
        this.callbackId = callbackId;
        this.platform = platform;
        switch (type) {
            //分享类型：图片
            case TYPE_IMAGE:
                this.shareQRCodeContent(content);
                break;
            //分享类型：文本
            case TYPE_TEXT:
                this.shareTextContent(content);
                break;
        }

    }

    /**
     * 分享链接
     *
     * @param callbackId JS回调标识
     * @param webName    网站名称
     * @param url        链接URL
     * @param title      分享出去的内容所显示的标题
     * @param content    分享出去的内容所显示的内容
     * @param comment    分享出去的内容所显示的评论(只有QQ空间需要这个)
     * @param platform   要分享到的平台
     */
    public void shareLink(final int callbackId, final String webName, final String url, final String title, final String content, final String comment, final int platform) {
        PermissionsUtil.requestPermission(ctx, new PermissionListener() {
            @Override
            public void permissionGranted(@NonNull String[] permission) {
                Bitmap bitmap = BitmapFactory.decodeResource(ctx.getResources(), R.mipmap.ic_launcher);
                Bitmap bmp = FileUtil.changeColor(bitmap);
                boolean success = FileUtil.saveBitmapFile(bmp, getAppIconFile());
                if (!success) return;
                OnekeyShare oks = new OnekeyShare();
                //关闭sso授权
                oks.disableSSOWhenAuthorize();
                // 分享时Notification的图标和文字  2.5.9以后的版本不调用此方法
                //oks.setNotification(R.drawable.ic_launcher, getString(R.string.app_name));
                oks.setTitle(title);// title标题，印象笔记、邮箱、信息、微信、人人网和QQ空间使用
                oks.setTitleUrl(url);// titleUrl是标题的网络链接，仅在人人网和QQ空间使用
                oks.setImagePath(getAppIconFile());//确保SDcard下面存在此张图片
                oks.setText(content); // text是分享文本，所有平台都需要这个字段
                oks.setUrl(url);// url仅在微信（包括好友和朋友圈）中使用
                oks.setComment(comment);// comment是我对这条分享的评论，仅在人人网和QQ空间使用
                oks.setSite(webName);// site是分享此内容的网站名称，仅在QQ空间使用
                oks.setSiteUrl(url);// siteUrl是分享此内容的网站地址，仅在QQ空间使用
                if (null != getPlatformName(platform))
                    oks.setPlatform(getPlatformName(platform));
                oks.setCallback(new PlatformActionListener() {
                    @Override
                    public void onComplete(Platform platform, int i, HashMap<String, Object> hashMap) {
                        Logger.error(TAG, "分享完成");
                        FileUtil.removeFile(getAppIconFile());
                        JSCallback.callJS(callbackId, JSCallback.SUCCESS, "");
                    }

                    @Override
                    public void onError(Platform platform, int i, Throwable throwable) {
                        Logger.error(TAG, "分享出错");
                        FileUtil.removeFile(getAppIconFile());
                        JSCallback.callJS(callbackId, JSCallback.FAIL, "");
                    }

                    @Override
                    public void onCancel(Platform platform, int i) {
                        Logger.error(TAG, "分享取消");
                        JSCallback.callJS(callbackId, JSCallback.FAIL, "");
                        FileUtil.removeFile(getAppIconFile());
                    }
                });
                oks.show(ctx);// 启动分享GUI
            }

            @Override
            public void permissionDenied(@NonNull String[] permission) {
            }
        }, Manifest.permission.WRITE_EXTERNAL_STORAGE);
    }


    /**
     * 分享二维码
     *
     * @param content 二维码的内容
     */
    private void shareQRCodeContent(final String content) {
        switch (platform) {
            //分享到平台->微信
            case PLATFORM_WE_CHAT:
                this.startShareQRCode(content, Wechat.NAME);
                break;
            //分享到平台->朋友圈
            case PLATFORM_MOMENTS:
                this.startShareQRCode(content, WechatMoments.NAME);
                break;
            //分享到平台->QQ空间
            case PLATFORM_Q_ZONE:
                this.startShareQRCode(content, QZone.NAME);
                break;
            //分享到平台->QQ
            case PLATFORM_QQ:
                this.startShareQRCode(content, QQ.NAME);
                break;
            //分享到平台->LINE
            case PLATFORM_LINE:
                this.startShareQRCode(content, Line.NAME);
                break;
            //分享到平台->所有平台
            case PLATFORM_ALL:
                this.startShareQRCode(content, null);
                break;
        }

    }

    /**
     * 分享文本内容
     *
     * @param content 文本的内容
     */
    private void shareTextContent(final String content) {
        switch (platform) {
            //分享到平台->微信
            case PLATFORM_WE_CHAT:
                this.startShareText(content, Wechat.NAME);
                break;
            //分享到平台->朋友圈
            case PLATFORM_MOMENTS:
                this.startShareText(content, WechatMoments.NAME);
                break;
            //分享到平台->QQ空间
            case PLATFORM_Q_ZONE:
                this.startShareText(content, QZone.NAME);
                break;
            //分享到平台->QQ
            case PLATFORM_QQ:
                this.shareToQQ(content);
                break;
            //分享到平台->LINE
            case PLATFORM_LINE:
                this.startShareText(content, Line.NAME);
                break;
            case PLATFORM_ALL:
                this.startShareText(content, null);
                break;
        }
    }

    /**
     * 由于QQ是不支持分享纯文本的
     * 此处只能通过发送文本的形式来实现、貌似这里是拿不到回调的
     *
     * @param content 要发送的内容
     */
    private void shareToQQ(String content) {
        try {
            Intent intent = new Intent("android.intent.action.SEND");
            intent.setType("text/plain");
            intent.putExtra(Intent.EXTRA_SUBJECT, "分享");
            intent.putExtra(Intent.EXTRA_TEXT, content);
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            intent.setComponent(new ComponentName("com.tencent.mobileqq", "com.tencent.mobileqq.activity.JumpActivity"));
            ctx.startActivity(intent);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 开始执行分享操作
     *
     * @param content  要分享的文本内容
     * @param platform 要分享到的平台
     */
    private void startShareText(String content, String platform) {
        final OnekeyShare oks = new OnekeyShare();
        oks.disableSSOWhenAuthorize();
        oks.setText(content);
        if (null != platform)
            oks.setPlatform(platform);
        oks.setCallback(new PlatformActionListener() {
            @Override
            public void onComplete(Platform platform, int i, HashMap<String, Object> hashMap) {
                Logger.error(TAG, "分享完成");
                JSCallback.callJS(callbackId, JSCallback.SUCCESS, "");
            }

            @Override
            public void onError(Platform platform, int i, Throwable throwable) {
                Logger.error(TAG, "分享出错");
                JSCallback.callJS(callbackId, JSCallback.FAIL, "");
            }

            @Override
            public void onCancel(Platform platform, int i) {
                Logger.error(TAG, "分享取消");
                JSCallback.callJS(callbackId, JSCallback.FAIL, "");
            }
        });
        oks.show(ctx);
    }

    /**
     * 开始执行分享操作
     *
     * @param content  要分享的二维码内容
     * @param platform 要分享到的平台
     */
    private void startShareQRCode(final String content, final String platform) {
        PermissionsUtil.requestPermission(ctx, new PermissionListener() {
            @Override
            public void permissionGranted(@NonNull String[] permission) {
                Bitmap bitmap = QRCodeUtils.createCode(ctx, content);
                if (null == bitmap) return;
                boolean success = FileUtil.saveBitmapFile(bitmap, getFileDirPath());
                if (!success) return;
                OnekeyShare oks = new OnekeyShare();
                oks.disableSSOWhenAuthorize();
                oks.setImagePath(getFileDirPath());
                if (null != platform)
                    oks.setPlatform(platform);
                oks.setCallback(new PlatformActionListener() {
                    @Override
                    public void onComplete(Platform platform, int i, HashMap<String, Object> hashMap) {
                        Logger.error(TAG, "分享完成");
                        FileUtil.removeFile(getFileDirPath());
                        JSCallback.callJS(callbackId, JSCallback.SUCCESS, "");
                    }

                    @Override
                    public void onError(Platform platform, int i, Throwable throwable) {
                        Logger.error(TAG, "分享出错");
                        FileUtil.removeFile(getFileDirPath());
                        JSCallback.callJS(callbackId, JSCallback.FAIL, "");
                    }

                    @Override
                    public void onCancel(Platform platform, int i) {
                        Logger.error(TAG, "分享取消");
                        FileUtil.removeFile(getFileDirPath());
                        JSCallback.callJS(callbackId, JSCallback.FAIL, "");
                    }
                });
                oks.show(ctx);
            }

            @Override
            public void permissionDenied(@NonNull String[] permission) {

            }
        }, Manifest.permission.WRITE_EXTERNAL_STORAGE);

    }

    /**
     * 本地的二维码图片(要分享的图片必须在SDCard目录下！)
     *
     * @return 本地图片的路径
     */
    private String getFileDirPath() {
        return Environment.getExternalStorageDirectory() + File.separator + "qr_download_link.png";
    }

    /**
     * 把App的图片存到本地的路径
     *
     * @return 本地的路径
     */
    private String getAppIconFile() {
        return Environment.getExternalStorageDirectory() + File.separator + "ic_launcher.png";
    }

    private String getPlatformName(int platform) {
        switch (platform) {
            //分享的平台->微信
            case PLATFORM_WE_CHAT:
                return Wechat.NAME;
            //分享的平台->朋友圈
            case PLATFORM_MOMENTS:
                return WechatMoments.NAME;
            //分享的平台->QQ空间
            case PLATFORM_Q_ZONE:
                return QZone.NAME;
            //分享的平台->QQ
            case PLATFORM_QQ:
                return QQ.NAME;
            default:
                return null;
        }
    }
}
