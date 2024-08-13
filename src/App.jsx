import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./components/Browse";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import JobsDescription from "./components/JobsDescription";
import Profile from "./components/Profile";
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
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;