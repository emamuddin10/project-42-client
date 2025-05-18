import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
// import Biodata from "../Pages/Biodata/Biodata";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
// import CreateBiodata from "../Pages/Dashboard/CreateBiodata/CreateBiodata";
import CardForm from "../Pages/Biodata/CardForm";
import Biodata from "../Pages/Biodata/Biodata";
import About from "../Pages/About/About";
// import Favourite from "../Component/DashboardComponents/Favourite";
// import ViewBiodata from "../Component/DashboardComponents/ViewBiodata";
// import GotMarried from "../Component/DashboardComponents/GotMarried";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AdminDashboard from "../Components/DashboardComponents/AdminDashboard";
import SuccessStories from "../Components/DashboardComponents/SuccessStories";
import PremiumApproval from "../Components/DashboardComponents/PremiumApproval";
import PremiumBiodataDetail from "../Components/Home/PremiumBiodataDetail";
import AdminRoute from "./AdminRoute";
import ApproveContactRequest from "../Components/DashboardComponents/ApproveContactRequest";
import Checkout from "../Pages/Biodata/CheckOutForm";
import UpdateBiodata from "../Pages/UpdateBiodata/UpdateBiodata";
import BiodataDetail from "../Pages/Biodata/BiodataDetails";
import Favourite from "../components/DashboardComponents/Favourite";
import ViewBiodata from "../components/DashboardComponents/ViewBiodata";
import GotMarried from "../components/DashboardComponents/GotMarried";
import ManageUsers from "../components/DashboardComponents/ManageUser";
import DashboardHome from "../components/DashboardComponents/DashboardHome";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyContactRequest from "../components/DashboardComponents/MyContactRequests";
// import DashboardHome from "../Component/DashboardComponents/DashboardHome";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/biodata",
        element: <Biodata> </Biodata>,
      },
      {
        path: "/biodata/:id",
        element: (
          <PrivateRoute>
            <BiodataDetail></BiodataDetail>
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/:biodataId",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
      {
        path: "/premium-requests/:id",
        element: (
          <PrivateRoute>
            <PremiumBiodataDetail></PremiumBiodataDetail>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboard_profile",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "create_edit_biodata",
        element: <UpdateBiodata></UpdateBiodata>
      },

      {
        path: "view_biodata",
        element: <ViewBiodata></ViewBiodata>,
      },
      {
        path: "my_contact_request",
        element: <MyContactRequest></MyContactRequest>,
      },
      {
        path: "favorites_biodata",
        element: <Favourite></Favourite>,
      },
      {
        path: "got_married",
        element: <GotMarried></GotMarried>,
      },
      {
        path: "manage",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
      },
      {
        path: "success_stories",
        element: (
          <AdminRoute>
            <SuccessStories></SuccessStories>
          </AdminRoute>
        ),
      },
      {
        path: "approvedPremium",
        element: (
          <AdminRoute>
            <PremiumApproval></PremiumApproval>
          </AdminRoute>
        ),
      },
      {
        path: "approvedContactRequest",
        element: (
          <AdminRoute>
            <ApproveContactRequest></ApproveContactRequest>
          </AdminRoute>
        ),
      },
    ],
  },
]);
