import { Link } from "react-router-dom";
import "./Components.css";

const Main = () => {
    return (
        <section>
            <h1>spendshare</h1>
            <div>
                <h4>Register to get started.</h4>
                <h4>Predict your spendings for the month.</h4>
                <h4>Help yourself reach your expenditure goals.</h4>
            </div>
            <Link to="/register">
                <button><span>Register</span></button>
            </Link>
            <Link to="/login">
                <button><span>Login</span></button>
            </Link>
        </section>
    );
};

export default Main;
