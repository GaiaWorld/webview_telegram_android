package com.kupay.kupay.presenter;

import android.app.Activity;
import android.content.ContentResolver;
import android.database.Cursor;
import android.net.Uri;
import android.os.Handler;
import android.os.Message;
import android.provider.MediaStore;

import com.kupay.kupay.base.BasePresenter;
import com.kupay.kupay.bean.FileItem;
import com.kupay.kupay.iview.SelectImageView;
import com.kupay.kupay.util.ContainerUtil;

import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by "iqos_jay@outlook.com" on 2018/7/6.
 * SelectImagePresenter
 */
public class SelectImagePresenter extends BasePresenter<SelectImageView> implements Runnable {
    private static final int SEARCH_IMAGE_FINISH = 0x2000;//index->search image finish.
    private MyHandler mHandler = new MyHandler(this);
    private List<FileItem> mFileItemList;

    /**
     * Constructor of BasePresenter.
     * All of the subs who extents this BasePresenter must implement this method.
     *
     * @param mActivity Activity,it is often used as context.
     */
    public SelectImagePresenter(Activity mActivity) {
        super(mActivity);
        mFileItemList = new ArrayList<>();
    }

    /**
     * Initialize the view of App's callback.
     *
     * @param selectImageView Generic parameter IV impl.
     */
    @Override
    public void initView(SelectImageView selectImageView) {
        iv = selectImageView;
    }

    /**
     * Find all images from local.
     */
    public void searchImages() {
        new Thread(this).start();
    }

    /**
     * When an object implementing interface <code>Runnable</code> is used
     * to create a thread, starting the thread causes the object's
     * <code>run</code> method to be called in that separately executing
     * thread.
     * <p>
     * The general contract of the method <code>run</code> is that it may
     * take any action whatsoever.
     *
     * @see Thread#run()
     */
    @Override
    public void run() {
        getAllLocalPhotos();
    }

    private void getAllLocalPhotos() {
        Uri imageUri = MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
        ContentResolver contentResolver = mActivity.getContentResolver();
        String[] projection = new String[]{MediaStore.Images.ImageColumns.DATA, MediaStore.Images.ImageColumns.DISPLAY_NAME, MediaStore.Images.ImageColumns.SIZE, MediaStore.Images.ImageColumns.DATE_ADDED};
        Cursor cursor = contentResolver.query(imageUri, projection, null, null, MediaStore.Images.Media.DATE_ADDED + " desc");
        if (null == cursor) return;
        if (cursor.getCount() != 0) {
            while (cursor.moveToNext()) {
                String path = cursor.getString(cursor.getColumnIndex(MediaStore.Images.ImageColumns.DATA));
                String fileName = cursor.getString(cursor.getColumnIndex(MediaStore.Images.Media.DISPLAY_NAME));
                String size = cursor.getString(cursor.getColumnIndex(MediaStore.Images.Media.SIZE));
                String date = cursor.getString(cursor.getColumnIndex(MediaStore.Images.Media.DATE_ADDED));
                FileItem item = new FileItem(path, fileName, size, date);
                item.setType(FileItem.FILE_TYPE_IMAGE);
                mFileItemList.add(item);
            }
        }
        cursor.close();
        mHandler.sendEmptyMessage(SEARCH_IMAGE_FINISH);
    }

    /**
     * This method will be called when user click "预览" on UI view,
     * we're preparing to jump to preview.
     */
    public void previewImage() {
    }

    /**
     * Non-static inner class hold references to external class.
     * You might cause memory leaks without using static inner classes.
     * But static inner class couldn't call non-static method in external class,
     * there an example to show you that how to write a standard code without memory leaks.
     * Here you can get external object execution operations through {@link WeakReference}.
     */
    private static class MyHandler extends Handler {
        private WeakReference<SelectImagePresenter> weak;

        MyHandler(SelectImagePresenter pre) {
            weak = new WeakReference<>(pre);
        }

        @Override
        public void handleMessage(Message msg) {
            SelectImagePresenter pre = weak.get();
            if (null == pre) return;
            switch (msg.what) {
                //Search File finish.
                case SEARCH_IMAGE_FINISH:
                    pre.iv.onShowAllPreview(pre.mFileItemList);
                    break;
            }
        }
    }

}
