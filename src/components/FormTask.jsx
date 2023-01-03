import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setSelectTask } from "../store/slices/selectTask.slices";
import { create, update } from "../store/slices/tasks.slices";
import { toggleList } from "../store/slices/toggleListTasks.slices";
import "../styles/formTask.css";
import Message from "./Message";

const FormTask = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const selectTask = useSelector((state) => state.selectTask);

    useEffect(() => {
        reset({
            title: selectTask?.title,
            description: selectTask?.description,
            completed: selectTask?.completed
        });
    }, [selectTask]);

    const submit = data => {
        if (selectTask) {
            dispatch(update(selectTask?.id, data));
            reset({
                title: "",
                description: "",
                completed: false
            });
            dispatch(setSelectTask(null));
        } else {
            dispatch(create(data));
            reset({
                title: "",
                description: "",
                completed: false
            });
        };
    };

    const deselect = () => {
        dispatch(setSelectTask(null));
        reset({
            title: "",
            description: "",
            completed: false
        });
    };
    return (
        <div data-aos="fade-up">
            <div className="task-list">
                <div className="button">
                    <button onClick={() => dispatch(toggleList())}>Ver todas las tareas</button>
                </div>
            </div>
            <div className="form-task">
                <div className="task-title">
                    <h1>{selectTask ? "Actualizar tarea" : "Crear tarea"}</h1>
                </div>
                <form className="task-form" onSubmit={handleSubmit(submit)}>
                    <div className="input-form">
                        <label htmlFor="title">Titulo</label>
                        <br />
                        <input type="text" id="title" {...register("title", {
                            required: true
                        })} />
                    </div>
                    {errors.title && <Message Class={"bad"} Message={"Indica un titulo"} />}
                    <div className="input-form">
                        <label htmlFor="description">Descripcion</label>
                        <br />
                        <input type="text" id="description" {...register("description", {
                            required: true
                        })} />
                    </div>
                    {errors.description && <Message Class={"bad"} Message={"Indica una descripcion"} />}
                    <div className="space-input input-checkbox">
                        <label htmlFor="completed">Completado</label>
                        <input type="checkbox" {...register("completed", {
                        })} />
                    </div>
                    <div className="button">
                        <div className="button-flex">
                            <button>{selectTask ? "Actualizar" : "Crear"}</button>
                            {selectTask && <button type="reset" onClick={deselect}>Vaciar</button>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormTask;