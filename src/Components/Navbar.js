import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const [showContact, setShowContact] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem("isLoggedIn");
            setIsLoggedIn(false);
            navigate("/login");
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    return (
        <>
            <nav>
                <div className="nav-left">
                    <img src="/logo.png" alt="Logo" className="logo" />
                    <h6>spendshare - Set your finances straight!</h6>
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/features">Features</Link>
                    <a
                        href="#"
                        className="contact-link"
                        onMouseEnter={() => setShowContact(true)}
                        onMouseLeave={() => setShowContact(false)}
                    >
                        Contact
                    </a>
                    {isLoggedIn ? (
                        <a href="#" onClick={handleLogout}>Logout</a>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </div>
            </nav>

            {showContact && (
                <div className="contact-popup">
                    <h3>Contact Us</h3>
                    <p>📧 Email: support@spendshare.com</p>
                    <p>📞 Phone: +123 456 7890</p>
                </div>
            )}
        </>
    );
};

export default Navbar;
