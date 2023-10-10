import axios from "axios";

export const ajaxCallGet = (url) => {
    return axios.get(`${process.env.api_url}${url}`);
}

export const ajaxCallPost = (url, data, token) => {
    return axios.post(`${process.env.api_url}${url}`, data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}