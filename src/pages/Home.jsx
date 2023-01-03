import ListTasks from "../components/ListTasks";
import FormTask from "../components/FormTask";
import "../styles/home.css";
import HeaderHome from "../components/HeaderHome";

const Home = () => {
    return (
        <div>
            <HeaderHome />
            <div className="container-home">
                <div className="home">
                    <FormTask />
                    <ListTasks />
                </div>
            </div>
        </div>
    );
};

export default Home;