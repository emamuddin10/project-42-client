import { useContext, useState } from "react";
import useAxiosPublic from "../../src/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useRole = () => {
    const {user, loading } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();


    const {data:role = '', isLoading } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async() =>{
            const { data } = await axiosPublic.get(`/user/${user?.email}`)
            return data.role
        }
    })
    
        //Fetch user info 

        return [role, isLoading]
    
};

export default useRole;
