// import { useContext } from "react";
// import UserContext from "./Context";


// const Footer = () => {
//     const {user} = useContext(UserContext)
//     return(
//         <h4>jai shree ram : This website is developed by {user.name} - {user.email}</h4>
//     );
// };
// export default Footer;



import { useContext } from "react";
import UserContext from "./Context";
 

const Footer = () => {
  const { user } = useContext(UserContext);
  const currentYear = new Date().getFullYear(); // Get current year for copyright
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          <strong>Food villa</strong> – This website is developed by{" "}
          <span className="user-name">{user?.name || "Anonymous"}</span> -{" "}
          <a href={`mailto:${user?.email}`} className="user-email">
            {user?.email || "email@example.com"}
          </a>
        </p>

        <div className="footer-links">
          <a href="/privacy-policy" className="footer-link">
            Privacy Policy
          </a>
          <a href="/terms" className="footer-link">
            Terms & Conditions
          </a>
          <a href="/contact" className="footer-link">
            Contact Us
          </a>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} All Rights Reserved. <br />
            Website by <a href="https://www.your-website.com" className="developer-link">Gaurav Upadhyay</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
