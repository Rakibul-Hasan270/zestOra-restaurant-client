import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:9000',
    withCredentials: true
})

const useAxiosSecure = () => {
    axiosSecure.interceptors.response.use(res => {
        console.log(res);
        return res;
    },
        err => {
            console.log(err);
            Promise.reject(err);
        })

    return axiosSecure;
};

export default useAxiosSecure;