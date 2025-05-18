import React, { useContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BiodataForm from '../../components/DashboardComponents/BiodataForm';
import UserBiodata from '../../components/DashboardComponents/UserBiodata';

const UpdateBiodata = () => {
    const { user } = useContext(AuthContext);
    const [existingBiodata, setExistingBiodata] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/biodata/user/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setExistingBiodata(data);
            })
            .catch(error => {
                console.error('Error fetching existing biodata:', error);
                
            });
    }, [user.email]);

    return (
        <div>
            {existingBiodata ? (
                <UserBiodata></UserBiodata>
            ) : (
                <BiodataForm />
            )}
        </div>
    );
};

export default UpdateBiodata;