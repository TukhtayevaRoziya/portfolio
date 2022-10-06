import * as axios from "axios";

export const instance = axios.create({
    responseType: "json",
    withCredentials: true,
    baseURL: 'https://62111a6301ccdac0741c60ae.mockapi.io/api/v1/',
    headers:     {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});