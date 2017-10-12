/**
 * Created by pan on 2017/6/17.
 */

export const setLoaclStorage = (item, val) => {
    if (item && val) window.localStorage.setItem(item, val);
}

export const getLoaclStorage = (item, val) => {
    if (item) {
        return window.localStorage.getItem(item);
    }
    return false;
}