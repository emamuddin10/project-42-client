import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../Pages/Footer/Footer";

const Main = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
