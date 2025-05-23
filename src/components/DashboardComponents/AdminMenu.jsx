import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const AdminMenu = () => {
    const { user, logOut } = useContext(AuthContext);

     const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(error => console.log(error));
  };
    return (
        <div>
            <NavLink to="/" className="block px-4 py-2 text-sm rounded hover:bg-blue-700"> Home</NavLink>
            <NavLink to="/dashboard/dashboard_profile" className="block px-4 py-2 text-sm rounded hover:bg-blue-700">Dashboard Home</NavLink>
          
          <NavLink to="/dashboard/dashboard" className="block px-4 py-2 text-sm rounded hover:bg-blue-700">Admin Dashboard</NavLink>
          <NavLink to="/dashboard/manage" className="block px-4 py-2 text-sm rounded hover:bg-blue-700"> Manage Users</NavLink>
          <NavLink to="/dashboard/approvedPremium" className="block px-4 py-2 text-sm rounded hover:bg-blue-700"> Approve Premium</NavLink>
          <NavLink to="/dashboard/approvedContactRequest" className="block px-4 py-2 text-sm rounded hover:bg-blue-700"> Approve Contact Request</NavLink>
     
          <NavLink to="/dashboard/success_stories" className="block px-4 py-2 text-sm rounded hover:bg-blue-700">Success Stories</NavLink>
        <button onClick={handleLogout} className="block text-sm text-white px-4 py-2 rounded hover:bg-blue-700">Logout</button> 
        </div>
    );
};

export default AdminMenu;