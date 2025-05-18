import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import CardForm from "./CardForm";
import FilterBiodata from './FilterBiodata';

const Biodata = () => {
    const axiosSecure = useAxiosPublic();

    const [filters, setFilters] = useState({
        ageMin: '',
        ageMax: '',
        type: '',
        division: ''
    });

    const [appliedFilters, setAppliedFilters] = useState({});

    const { data: biodatas = [], isLoading } = useQuery({
        queryKey: ['biodata', appliedFilters], // Dependency
        queryFn: async () => {
            const queryParams = new URLSearchParams();
            if (appliedFilters.ageMin) queryParams.append('ageMin', appliedFilters.ageMin);
            if (appliedFilters.ageMax) queryParams.append('ageMax', appliedFilters.ageMax);
            if (appliedFilters.type) queryParams.append('type', appliedFilters.type);
            if (appliedFilters.division) queryParams.append('division', appliedFilters.division);

            const res = await axiosSecure.get(`/biodataFiltering?${queryParams.toString()}`);
            return res.data;
        }
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const applyFilters = () => {
        setAppliedFilters(filters);
    };

    return (
        <div className='flex flex-col md:flex-row gap-6 p-6'>
            <div className='md:w-1/3'>
                <FilterBiodata filters={filters} onFilterChange={handleFilterChange} onApply={applyFilters} />
            </div>
            <div className='md:w-2/3'>
                <h2 className='text-2xl font-bold text-red-600 font-serif mb-4 text-center'>All Biodatas</h2>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {biodatas.map(biodata => (
                            <CardForm key={biodata._id} biodata={biodata} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Biodata;
