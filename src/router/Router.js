import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// 각 페이지 import
import Login from "../pages/Login.js"
import Signup from "../pages/Signup.js"
import Main from "../pages/Main.js"

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </Router>
    )
}

export default AppRouter