import React, { useState,UserContext } from "react";
import ReactDOM from "react-dom/client"
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import About from "./About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Error from "./Error";
import Contact from "./Contact";
import InstaMart from "./Instamart";
import Cart from "./Cart";
import RestaurantMenu from "./RestrauntMenu";
import Profile from "./Profile";
import UserContext from "./Context";
import { Provider } from "react-redux";
import store from "./src/utils/store";


const AppLayout = () => {
    const [user,setUser] = useState({
        name:"Gaurav Upadhyay",
        email:"gaurav.upadhyay5252@gamai.com"
    });

    return (
<Provider store={store}>
<UserContext.Provider
value={{
    user:user,
    setUser: setUser,
}}
>

    <Header />
  <Outlet />
    <Footer />
   
    </UserContext.Provider>
</Provider>

    );
};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children : [
            
            {
                path: "/about",
                element:<About/>,
                children: [
                    {
                        path:"profile",
                        element:<Profile />
                    },
                ],
            },
            {
                path: "/",
                element:<Body/>
            },
            {
                path: "/contact",
                element:<Contact/>
            },
            {
                path: "/instamart",
                element:<InstaMart/>
            },
            {
                path: "/cart",
                element:<Cart/>
            },
            
            {
                path: "/restaurant/:id",
                element : <RestaurantMenu/>
               
            }
        ]
    },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={appRouter} />);
