import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage"; 
import SignUp from "../pages/auth/sign_up";
import SignIn from "../pages/auth/sign_in";
import ProjectsPage from "../pages/projects/projectsPage";


const publicRouters = [
    {
        path: '/',
        element: <HomePage/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: 'sign-up',  
        element: <SignUp/>,
    },
    {
        path: 'sign-in',  
        element: <SignIn/>,
    },
    {
        path: 'projects',
        element: <ProjectsPage/>,
    },
    {
        path: 'not-found',  
        element: <NotFoundPage/>
    },
]


export default publicRouters;