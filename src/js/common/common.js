/**
 * Created by pan on 2017/6/17.
 */
export default class Common {
    
    setLocalStorage(item, val) {
        if (item && val) window.localStorage.setItem(item, val);
    }
    
    getLocalStorage(item) {
        if (item){
            return window.localStorage.getItem(item);
        }
        return false;
    }
}