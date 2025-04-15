import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Farmers from "./pages/Farmers";
import Buyers from "./pages/Buyers";
import Guidance from "./pages/Guidance";
import Learners from "./pages/Learners";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/farmers" element={<Farmers />} />
                <Route path="/buyers" element={<Buyers />} />
                <Route path="/guidance" element={<Guidance />} />
                <Route path="/learners" element={<Learners />} />
            </Routes>
        </Router>
    );
}

export default App;
