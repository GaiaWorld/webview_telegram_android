package com.donkingliang.imageselector.adapter;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.v4.view.PagerAdapter;
import android.view.View;
import android.view.ViewGroup;

import com.bumptech.glide.Glide;
import com.donkingliang.imageselector.entry.Image;
import com.github.chrisbanes.photoview.PhotoView;

import java.util.ArrayList;
import java.util.List;

/**
 * 预览图片的Adapter
 */
public class ImagePagerAdapter extends PagerAdapter {

    private Context mContext;
    private List<PhotoView> viewList = new ArrayList<>(4);
    private List<Image> mImgList;
    private OnItemClickListener mListener;

    public ImagePagerAdapter(Context context, List<Image> imgList) {
        this.mContext = context;
        createImageViews();
        mImgList = imgList;
    }

    private void createImageViews() {
        for (int i = 0; i < 4; i++) {
            PhotoView imageView = new PhotoView(mContext);
            imageView.setAdjustViewBounds(true);
            viewList.add(imageView);
        }
    }

    @Override
    public int getCount() {
        return mImgList == null ? 0 : mImgList.size();
    }

    @Override
    public boolean isViewFromObject(@NonNull View view, @NonNull Object object) {
        return view == object;
    }

    @Override
    public void destroyItem(@NonNull ViewGroup container, int position, @NonNull Object object) {
        if (object instanceof PhotoView) {
            PhotoView view = (PhotoView) object;
            view.setImageDrawable(null);
            viewList.add(view);
            container.removeView(view);
        }
    }

    @NonNull
    @Override
    public Object instantiateItem(@NonNull ViewGroup container, final int position) {
        final PhotoView currentView = viewList.remove(0);
        final Image image = mImgList.get(position);
        container.addView(currentView);
        Glide.with(mContext).load(String.format("file://%s", image.getPath())).into(currentView);
        currentView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (mListener != null) {
                    mListener.onItemClick(position, image);
                }
            }
        });
        return currentView;
    }

    public void setOnItemClickListener(OnItemClickListener l) {
        mListener = l;
    }

    public interface OnItemClickListener {
        void onItemClick(int position, Image image);
    }
}
