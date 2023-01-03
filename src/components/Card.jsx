import { useDispatch } from "react-redux";
import { delet } from "../store/slices/tasks.slices";
import { setSelectTask } from "../store/slices/selectTask.slices";
import { toggleList } from "../store/slices/toggleListTasks.slices";

const Card = ({ ID, Title, Description, Completed, Task }) => {
    const dispatch = useDispatch();
    const edit = data => {
        dispatch(setSelectTask(data));
        dispatch(toggleList());
    };
    return (
        <div className="card" onClick={delet}>
            <div className="card-title">
                <h3>Titulo</h3>
                <p>{Title}</p>
            </div>
            <div className="card-description">
                <h3>Descripcion</h3>
                <p>{Description}</p>
            </div>
            <div className="card-completed">
                <h3>Completado</h3>
                <p>{Completed == false ? "No" : "Si"}</p>
            </div>
            <div className="card-icons">
                <div className="icons-flex">
                    <button className="edit" onClick={() => edit(Task)}><i className="fa-solid fa-pen-to-square"></i></button>
                    <button className="trash" onClick={() => dispatch(delet(ID))}><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Card;