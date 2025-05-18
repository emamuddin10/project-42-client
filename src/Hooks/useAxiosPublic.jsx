import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://project-42-server.onrender.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;