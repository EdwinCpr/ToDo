import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import "../styles/register.css";
import { toggleWatchPassword } from "../store/slices/watchPassword.slices";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [messageStatus, setMessageStatus] = useState(null);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const watchPassword = useSelector((state) => state.watchPassword);
    const submit = data => {
        axios.post("https://todoapi-production-2cd1.up.railway.app/api/v1/users", data)
            .then((res) => {
                setMessageStatus(true);
                setMessage(res.data.msg)
                setTimeout(() => {
                    setMessageStatus(null);
                    setMessage("")
                    navigate("/")
                }, 3000);
            })
            .catch((error) => {
                setMessageStatus(false);
                setMessage(error.response.data.msg)
                setTimeout(() => {
                    setMessageStatus(null);
                    setMessage("")
                }, 3000);
            });
    };
    return (
        <div className="container-register">
            <div className="register">
                <div className="register-title">
                    <h1>REGISTRO</h1>
                </div>
                <div className="register-form" data-aos="fade-up">
                    <form className="form-input" onSubmit={handleSubmit(submit)}>
                        <div className="input-form">
                            <label htmlFor="firstname">Nombre</label>
                            <br />
                            <input type="text" placeholder="Indica tu nombre" id="firstname" {...register("firstName", {
                                required: true
                            })} />
                        </div>
                        {errors.firstName && <Message Class={"bad mt"} Message={"Este campo es obligatorio"} />}
                        <div className="input-form">
                            <label htmlFor="lastname">Apellido</label>
                            <br />
                            <input type="lastname" placeholder="Indica tu apellido" id="lastname" {...register("lastName", {
                                required: true
                            })} />
                        </div>
                        {errors.lastName && <Message Class={"bad mt"} Message={"Este campo es obligatorio"} />}
                        <div className="input-form">
                            <label htmlFor="email">Correo electronico</label>
                            <br />
                            <input type="email" placeholder="Indica tu correo electronico" id="email" {...register("email", {
                                required: true
                            })} />
                        </div>
                        {errors.email && <Message Class={"bad mt"} Message={"Este campo es obligatorio"} />}
                        <div className="space-input">
                            <label htmlFor="password">Contraseña</label>
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
                        {errors.password && <Message Class={"bad mt"} Message={"Este campo es obligatorio"} />}
                        {messageStatus && <Message Class={"nice mt"} Message={message} />}
                        {messageStatus === false && <Message Class={"bad mt"} Message={message} />}
                        <div className="button">
                            <button>Registrarme</button>
                        </div>
                    </form>
                </div>
                <div className="option-register-login">
                    <p>Ya estas registrado? <Link to="/" className="redirect">iniciar sesion</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;