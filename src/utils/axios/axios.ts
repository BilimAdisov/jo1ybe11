import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://63a9c82c594f75dc1dc040b7.mockapi.io',
    timeout: 5000,
    headers: {'X-Custome-header' : 'foobar'}
})