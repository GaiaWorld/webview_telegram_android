package com.kupay.kupay.util;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.PixelFormat;
import android.graphics.drawable.Drawable;
import android.os.Environment;
import android.util.Base64;

import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

/**
 * Created by "iqos_jay@outlook.com" on 2018/6/22.
 * File Tools
 */
public class FileUtil {
    private static final String TAG = "FileUtil";

    /**
     * 文件转base64字符串
     *
     * @param file 要转换的文件
     * @return 转换过后的字符串
     */
    public static String fileToBase64(File file) {
        String base64 = null;
        InputStream in = null;
        try {
            in = new FileInputStream(file);
            byte[] bytes = new byte[in.available()];
            int length = in.read(bytes);
            base64 = Base64.encodeToString(bytes, 0, length, Base64.NO_WRAP);
//            base64 = Base64.encodeToString(bytes, Base64.NO_WRAP);
        } catch (IOException e) {
            Logger.error(TAG, e.getMessage());
        } finally {
            try {
                if (in != null) in.close();
            } catch (IOException e) {
                Logger.error(TAG, e.getMessage());
            }
        }
        return base64;
    }

    /**
     * 删除指定路径下的图片
     *
     * @param path 图片的路径
     */
    public static void removeFile(String path) {
        try {
            File file = new File(path);
            if (file.exists()) {
                Logger.verbose("删除文件", file.delete() ? "操作成功" : "操作失败");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static Bitmap drawableToBitmap(Drawable drawable) {

        int w = drawable.getIntrinsicWidth();
        int h = drawable.getIntrinsicHeight();
        System.out.println("Drawable转Bitmap");
        Bitmap.Config config =
                drawable.getOpacity() != PixelFormat.OPAQUE ? Bitmap.Config.ARGB_8888
                        : Bitmap.Config.RGB_565;
        Bitmap bitmap = Bitmap.createBitmap(w, h, config);
        //注意，下面三行代码要用到，否则在View或者SurfaceView里的canvas.drawBitmap会看不到图
        Canvas canvas = new Canvas(bitmap);
        drawable.setBounds(0, 0, w, h);
        drawable.draw(canvas);

        return bitmap;
    }

    /**
     * base64字符串转文件
     *
     * @param base64 base64字符串
     * @return 转换完成之后的文件
     */
    public static File base64ToFile(String base64) {
        File file = null;
        String fileName = "/Petssions/record/testFile.amr";
        FileOutputStream out = null;
        try {
            // 解码，然后将字节转换为文件
            file = new File(Environment.getExternalStorageDirectory(), fileName);
            if (!file.exists()) {
                boolean newFile = file.createNewFile();
                if (!newFile) return file;
            }
            byte[] bytes = Base64.decode(base64, Base64.DEFAULT);// 将字符串转换为byte数组
            ByteArrayInputStream in = new ByteArrayInputStream(bytes);
            byte[] buffer = new byte[1024];
            out = new FileOutputStream(file);
            int byteRead;
            while ((byteRead = in.read(buffer)) != -1) {
                out.write(buffer, 0, byteRead); // 文件写操作
            }
        } catch (IOException ioe) {
            ioe.printStackTrace();
        } finally {
            try {
                if (out != null)
                    out.close();
            } catch (IOException e) {
                Logger.error(TAG, e.getMessage());
            }
        }
        return file;
    }

    public static int getImageWidth(String path) {
        BitmapFactory.Options options = new BitmapFactory.Options();
        //最关键在此，把options.inJustDecodeBounds = true;
        //这里再decodeFile()，返回的bitmap为空，但此时调用options.outHeight时，已经包含了图片的高了
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(path, options); // 此时返回的bitmap为null
        //options.outHeight为原始图片的高
        return options.outWidth;
    }

    public static int getImageHeight(String path) {
        BitmapFactory.Options options = new BitmapFactory.Options();
        //最关键在此，把options.inJustDecodeBounds = true;
        //这里再decodeFile()，返回的bitmap为空，但此时调用options.outHeight时，已经包含了图片的高了
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(path, options); // 此时返回的bitmap为null
        //options.outHeight为原始图片的高
        return options.outHeight;
    }

    /**
     * Save the QRCode's bitmap to local file.
     *
     * @param bitmap   The qrCode's bitmap.
     * @param savePath The path where you would like to save into.
     */
    public static boolean saveBitmapFile(Bitmap bitmap, String savePath) {
        File file = new File(savePath);
        try {
            BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(file));
            bitmap.compress(Bitmap.CompressFormat.JPEG, 100, bos);
            bos.flush();
            bos.close();
            return true;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }

    //bitmap中的透明色用白色替换
    public static Bitmap changeColor(Bitmap bitmap) {
        if (bitmap == null) {
            return null;
        }
        int w = bitmap.getWidth();
        int h = bitmap.getHeight();
        int[] colorArray = new int[w * h];
        int n = 0;
        for (int i = 0; i < h; i++) {
            for (int j = 0; j < w; j++) {
                int color = getMixtureWhite(bitmap.getPixel(j, i));
                colorArray[n++] = color;
            }
        }
        return Bitmap.createBitmap(colorArray, w, h, Bitmap.Config.ARGB_8888);
    }

    //获取和白色混合颜色
    private static int getMixtureWhite(int color) {
        int alpha = Color.alpha(color);
        int red = Color.red(color);
        int green = Color.green(color);
        int blue = Color.blue(color);
        return Color.rgb(getSingleMixtureWhite(red, alpha), getSingleMixtureWhite(green, alpha),
                getSingleMixtureWhite(blue, alpha));
    }

    // 获取单色的混合值
    private static int getSingleMixtureWhite(int color, int alpha) {
        int newColor = color * alpha / 255 + 255 - alpha;
        return newColor > 255 ? 255 : newColor;
    }


}
