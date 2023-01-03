import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { toggleWatchPassword } from "../store/slices/watchPassword.slices";
import "../styles/login.css";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const watchPassword = useSelector((state) => state.watchPassword);
    const submit = data => {
        axios.post("https://todoapi-production-2cd1.up.railway.app/api/v1/users/login", data)
            .then((res) => {
                localStorage.setItem("user", JSON.stringify(res.data));
                navigate("/home")
                setTimeout(() => {
                    setMessage("")
                }, 3000);
            })
            .catch((error) => {
                setMessage(error.response.data.msg);
                setTimeout(() => {
                    setMessage("")
                }, 3000)
            });
    };
    return (
        <div className="container-login">
            <div className="login">
                <div className="login-title">
                    <h1>INICIAR SESION</h1>
                </div>
                <div className="login-form" data-aos="fade-up">
                    <div className="form-account">
                        <h3>Cuenta de prueba</h3>
                        <p>test@gmail.com</p>
                        <p>test123</p>
                    </div>
                    <form className="form-input" onSubmit={handleSubmit(submit)}>
                        <div className="input-form">
                            <label htmlFor="email">Correo electronico</label>
                            <br />
                            <input type="email" placeholder="Indica tu correo electronico" id="email" {...register("email", {
                                required: true
                            })} />
                        </div>
                        {errors.email && <Message Class={"bad"} Message={"Indica tu email"} />}
                        <div className="space-input form-input">
                            <label htmlFor="">Contraseña</label>
                            <br />
                            <div className="password-flex">
                                <div className="password-input">
                                    <input type={watchPassword ? "text" : "password"} placeholder="Indica tu contraseña" id="password" {...register("password", {
                                        required: true
                                    })} />
                                    <i className={watchPassword ? "fa-solid fa-eye-slash logo-eye" : "fa-solid fa-eye logo-eye"} onClick={() => dispatch(toggleWatchPassword())}></i>
                                </div>
                            </div>
                        </div>
                        {errors.password && <Message Class={"bad mt"} Message={"Indica tu contraseña"} />}
                        {message && <Message Class={"bad mt"} Message={message} />}
                        <div className="button">
                            <button>Iniciar sesion</button>
                        </div>
                    </form>
                </div>
                <div>
                    <div className="option-register-login">
                        <p>No tienes cuenta? <Link to="/register" className="redirect">registro</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;