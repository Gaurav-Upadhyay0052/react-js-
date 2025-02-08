import { useState, useContext  } from "react";
import { Link } from "react-router";
import UserContext from "./Context";
import { useSelector } from "react-redux";
import store from "./src/utils/store";



const loggedIn = () => {
return false;
}

const Title = () => (
    <a href="/">
    <img
     className="logo"
     alt="logo"
     src="https://images.squarespace-cdn.com/content/v1/5a2f1de74c326dc4a39876f2/1614115758201-2EQ2PAOCA5JS4U7ZWSZI/BrocktonVilla-72-53.jpg"/>
     </a>
 );
 const Header = () => {
   const [ isloggedIn,setIsLoggedIn] = useState(true) 
   const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState("");
   const {user} = useContext(UserContext);  
   
   const cartItems = useSelector(store => store.cart.items)
   console.log(cartItems);

   const handleLogin = () => {
    // Simulate login action (replace with actual logic)
    if (email && password) {
      setIsLoggedIn(true);
      console.log("Logged in with email:", email);
      // Set the user data after successful login (update your UserContext or Redux store here)
    } else {
      alert("Please enter both email and password.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail(""); // Clear email and password when logging out
    setPassword(""); // Clear password
    console.log("Logged out");
  };
    return(
        <div className="header">
            <Title/>
         <div className="nav-items">
                <ul>
                <Link to="/"><li> Home </li></Link>
                    <Link to="/about" >
                    <li>About</li></Link>

                     <Link to="/contact"><li> Contact</li></Link>
                    

                   < Link to="/InstaMart"><li>InstaMart</li></Link>
                   <Link to="/cart"><li> Cart{cartItems.length}</li></Link>
                </ul>
            </div >
            
          

          
            {isloggedIn ? (
                <div>
                  <button className="login-btn" onClick={handleLogout}>Logout </button>
                  </div>
                  ) :(
                    <div className="login-form">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    
                    
                    <button className="logout-btn" onClick={handleLogin} >Login</button></div>
                  )}
                  </div>
           

        
    );
};
  export default Header;