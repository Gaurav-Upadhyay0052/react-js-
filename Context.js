import { createContext } from "react";



const UserContext = createContext({
    user:{
    name: "Gaurav Upadhyay",
    email:"gaurav@gmail.com"
}})

export default UserContext
