import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./components/Browse";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import JobsDescription from "./components/JobsDescription";
import Profile from "./components/Profile";
import AdminJobs from "./components/admin/AdminJobs";
import AdminPostJob from "./components/admin/AdminPostJob";
import Applicants from "./components/admin/Applicants";
import Companies from "./components/admin/Companies";
import CompanySetUp from "./components/admin/CompanySetUp";
import CreateCompanies from "./components/admin/CreateCompanies";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/jobs',
    element: <Jobs />
  },
  {
    path: '/description/:id',
    element: <JobsDescription />
  },
  {
    path: '/browse',
    element: <Browse />
  },
  {
    path: '/profile',
    element: <Profile />
  },

  // admin
  {
    path: '/admin/companies',
    element: <ProtectedRoute><Companies /></ProtectedRoute>
  },
  {
    path: '/admin/companies/create',
    element: <ProtectedRoute><CreateCompanies /></ProtectedRoute>
  },
  {
    path: '/admin/companies/:id',
    element: <ProtectedRoute><CompanySetUp /></ProtectedRoute>
  },
  {
    path: '/admin/jobs',
    element: <ProtectedRoute><AdminJobs /></ProtectedRoute>
  },
  {
    path: '/admin/jobs/create',
    element: <ProtectedRoute><AdminPostJob /></ProtectedRoute>
  },
  {
    path: '/admin/jobs/:id/applicants',
    element: <ProtectedRoute> <Applicants /> </ProtectedRoute>
  },

])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;