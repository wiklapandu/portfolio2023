import {ajaxCallGet} from "./func/api";

export const getBlogs = () => {
    return ajaxCallGet('/blogs?populate=*');
}