import { useNavigate } from "react-router-dom";
import "../styles/headerHome.css";

const HeaderHome = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { firstName, lastName } = user;
    const navigate = useNavigate();
    const exit = () => {
        localStorage.clear();
        navigate("/")
    };
    return (
        <div className="headerhome">
            <div>
                <h3>Hola <span className="headerhome-username">{firstName} {lastName}</span> !</h3>
            </div>
            <div>
                <button className="exit" onClick={exit}><i className="fa-solid fa-arrow-right-from-bracket"></i></button>
            </div>
        </div>
    );
};

export default HeaderHome;