import { ajaxCallGet } from "./func/api";

export const getSettings = () => {
    return ajaxCallGet('/setting', process.env.TOKEN_PUBLIC)   
}

export const getAbout = () => {
    return ajaxCallGet('/about?populate=*', process.env.TOKEN_PUBLIC)
}