import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Post from "../pages/posts/Post";
import Login from "../pages/login/Login";

const RootRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/post/:id" element={<Post />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default RootRouter;
