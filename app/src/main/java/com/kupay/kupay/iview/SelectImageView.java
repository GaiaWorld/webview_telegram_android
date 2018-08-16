package com.kupay.kupay.iview;

import com.kupay.kupay.base.BaseView;
import com.kupay.kupay.bean.FileItem;

import java.util.List;

/**
 * Created by "iqos_jay@outlook.com" on 2018/7/6.
 */
public interface SelectImageView extends BaseView {
    /**
     * Show all images' preview from local.
     *
     * @param fileItemList image's information,include:path,selected status.
     */
    void onShowAllPreview(List<FileItem> fileItemList);
}
