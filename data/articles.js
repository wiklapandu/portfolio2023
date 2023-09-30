import {ajaxCallGet} from "./func/api";

export const getArticles = () => {
    return ajaxCallGet('/services?populate=*');
}