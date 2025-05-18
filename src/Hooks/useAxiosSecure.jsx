import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: 'https://project-42-server.onrender.com'
})
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;