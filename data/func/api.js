import axios from "axios";

export const ajaxCallGet = (url) => {
    return axios.get(`${process.env.api_url}${url}`);
}