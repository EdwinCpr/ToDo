import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../store/slices/tasks.slices";
import { toggleList } from "../store/slices/toggleListTasks.slices";
import "../styles/listTasks.css";
import "../styles/card.css";
import Card from "./Card";

const ListTasks = () => {
    const dispatch = useDispatch();
    const toggleListTasks = useSelector((state) => state.toggleListTasks);
    const Tasks = useSelector((state) => state.Tasks);
    useEffect(() => {
        dispatch(get());
    }, []);
    return (
        <div>
            <div className={toggleListTasks ? "list-tasks" : "hidden"}>
                <div className="tasks">
                    <div className="tasks-x">
                        <i className="fa-solid fa-x" onClick={() => dispatch(toggleList())}></i>
                    </div>
                    <div className="tasks-list">
                        {
                            Tasks.map((task) => (
                                <Card ID={task.id} Title={task.title} Description={task.description} Completed={task.completed} Task={task} key={task.id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListTasks;