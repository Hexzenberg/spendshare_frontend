import { Link } from "react-router-dom";

const UserHome = () => {
    return (
        <section>
            <h1>spendshare</h1>
            <p>Press the button below to predict your spending!</p>
            <Link to="/predict">
                <button>Predict</button>
            </Link>
        </section>
    );
};

export default UserHome;
