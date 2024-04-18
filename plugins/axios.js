import axios from 'axios'

export const API = axios.create({
    // We are using apisful.com as a backend for this e-commerce website
    baseURL: 'https://66216fb7f9269513c921d57c--prismatic-cascaron-8c0697.netlify.app/',
    // headers: {
    //     // Put your access key here
    //     'X-Api-Key': '-u3Vg7mF0cf5_lRS0Ir8GpFtQMT9mpIQc-VXHN6yCjI'
    // },
    validateStatus(status) {
        return status >= 200 && status < 500
    }
})
export default defineNuxtPlugin(() => { });