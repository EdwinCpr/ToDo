import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ProtectedLogin from "./components/ProtectedLogin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="container">
      <HashRouter>
        <Routes>
          <Route element={<ProtectedLogin />}>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;