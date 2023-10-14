import axios from "axios";

export const ajaxCallGet = (url, token, args = {}) => {
    let headers = {
        'Authorization': token ? `Bearer ${token}` : ''
    };

    let data = {
        headers: {
            ...headers,
            ...args.headers
        }
    };

    return axios.get(`${process.env.api_url}${url}`, data);
}

export const ajaxCallPost = (url, data, token) => {
    return axios.post(`${process.env.api_url}${url}`, data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}