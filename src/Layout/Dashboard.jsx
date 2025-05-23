import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useRole from '../hooks/useRole';
// import AdminMenu from '../Component/DashboardComponents/AdminMenu';
import HostMenu from '../components/DashboardComponents/HostMenu';
import { AuthContext } from '../AuthProvider/AuthProvider';
import AdminMenu from '../components/DashboardComponents/AdminMenu';

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const [role, isLoading ] = useRole()
  console.log(role, isLoading);

  // const handleLogout = () => {
  //   logOut()
  //     .then(() => {})
  //     .catch(error => console.log(error));
  // };

  

  return (

    <div className="flex h-full">
        <ToastContainer />
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white flex flex-col">
        <div className="h-16 flex items-center justify-center text-2xl font-bold">
          Dashboard
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2">
          {/* <NavLink to="/" className="block px-4 py-2 text-sm rounded hover:bg-blue-700">Home</NavLink>
          
          <NavLink to="/dashboard/manage" className="block px-4 py-2 text-sm rounded hover:bg-blue-700"> Manage Users</NavLink> */}
          
          {role === 'user' &&  <HostMenu></HostMenu>}
          {role === 'admin' &&  <AdminMenu></AdminMenu>}
          {/* user */}
          {/* <NavLink to="/" className="block px-4 py-2 text-sm rounded hover:bg-blue-700">Home</NavLink>
          <NavLink to="/dashboard/create_edit_biodata" className="block px-4 py-2 text-sm rounded hover:bg-blue-700">Create/Edit Biodata</NavLink>
          <NavLink to="/dashboard/view_biodata" className="block px-4 py-2 text-sm rounded hover:bg-blue-700">View Biodata</NavLink>
          <Link to="/dashboard/my_contact_requests" className="block px-4 py-2 text-sm rounded hover:bg-blue-700">My Contact Request</Link>
          <Link to="/dashboard/favorites_biodata" className="block px-4 py-2 text-sm rounded hover:bg-blue-700">My Favorites Biodatas</Link>
          <Link to="/dashboard/got_married" className="block px-4 py-2 text-sm rounded hover:bg-blue-700">Got Married</Link>
          <button onClick={handleLogout} className="block text-sm text-white px-4 py-2 rounded hover:bg-blue-700">Logout</button> */}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-6 bg-gray-100 border-b border-gray-300">
          <h1 className="text-3xl font-semibold text-gray-700">Welcome to Your Dashboard</h1>
        </header>
        
        {/* Main Section */}
        <main className="flex-1 flex items-center justify-center bg-gray-100">
          <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;