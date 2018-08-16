package com.kupay.kupay.util;

import java.util.List;
import java.util.Set;

/**
 * Created by "iqos_jay@outlook.com" on 2018/7/4.
 * ContainerUtil
 */
public class ContainerUtil {
    /**
     * Determine whether the list is null or empty.
     *
     * @param list list
     * @return 1、true:is null or is empty. 2、not null and not empty.
     */
    public static boolean isNullOrEmpty(List<?> list) {
        return null == list || 0 == list.size();
    }

    /**
     * Determine whether the set is null or empty.
     *
     * @param set set
     * @return 1、true:is null or is empty. 2、not null and not empty.
     */
    public static boolean isNullOrEmpty(Set<?> set) {
        return null == set || 0 == set.size();
    }
}
