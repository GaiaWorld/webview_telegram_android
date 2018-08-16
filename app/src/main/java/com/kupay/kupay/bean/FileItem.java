package com.kupay.kupay.bean;

import android.support.annotation.IntDef;
import android.support.annotation.NonNull;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.text.NumberFormat;

/**
 * Created by "iqos_jay@outlook.com" on 2018/7/6.
 */
public class FileItem implements Comparable<FileItem> {
    public static final int FILE_TYPE_IMAGE = 0;
    public static final int FILE_TYPE_VIDEO = 1;
    private String mFilePath;
    private String mFileName;
    private String mSize;
    private boolean selected;
    private int type;

    /**
     * 创建时间
     */
    private String mDate;

    public FileItem(@NonNull String path, String name, String size, String date) {
        this.mFilePath = path;
        this.mFileName = name;
        this.mSize = size;
        this.mDate = date;
    }

    public String getFilePath() {
        return mFilePath;
    }

    public void setFilePath(String mFilePath) {
        this.mFilePath = mFilePath;
    }

    public String getFileName() {
        return mFileName;
    }

    public void setFileName(String mFileName) {
        this.mFileName = mFileName;
    }

    public String getFileSize() {
        NumberFormat ddf1 = NumberFormat.getNumberInstance();
        ddf1.setMaximumFractionDigits(2);
        String sizeDisplay;
        long size = Long.valueOf(mSize);
        if (size > 1048576.0) {
            double result = size / 1048576.0;
            sizeDisplay = ddf1.format(result) + "M";
        } else if (size > 1024) {
            double result = size / 1024;
            sizeDisplay = ddf1.format(result) + "K";
        } else {
            sizeDisplay = ddf1.format(size) + "B";
        }
        return sizeDisplay;
    }

    public long getLongFileSize() {
        return Long.valueOf(mSize);
    }

    public String getDate() {
        return mDate;
    }

    public @Type
    int getType() {
        return type;
    }

    public void setType(@Type int type) {
        this.type = type;
    }

    public boolean isSelected() {
        return selected;
    }

    public void setSelected(boolean selected) {
        this.selected = selected;
    }

    @Override
    public int compareTo(@NonNull FileItem fileItem) {
        return (int) (Long.valueOf(fileItem.getDate()) - Long.valueOf(mDate));
    }

    @IntDef({FILE_TYPE_IMAGE, FILE_TYPE_VIDEO})
    @Retention(RetentionPolicy.SOURCE)
    private @interface Type {

    }

    @Override
    public String toString() {
        if (type == FILE_TYPE_IMAGE) {
            return "{mediaType: image, " + "mediaPath: " + mFilePath + "}";
        } else {
            return "{mediaType: video, " + "mediaPath: " + mFilePath + "}";
        }
    }
}
