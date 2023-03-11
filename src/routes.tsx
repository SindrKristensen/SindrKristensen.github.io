import App from "./App";
import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "./Pages/error-page";
import AboutMe from "./Pages/about_me";
import FrontPage from "./Pages/front-page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,

        children:[
            {
                path: "/",
                element: <FrontPage/>
            },
            {
                path: "about-me",
                element: <AboutMe />
            }
        ]
    },
]);