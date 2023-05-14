import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Pages/LoginPage.jsx";
import UsersList from "./Pages/UsersList.jsx";
import HomePage from "./Pages/HomePage.jsx";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer.jsx";
import { Route, Routes } from "react-router-dom";
function App() {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/profile" element={<HomePage />} />
                <Route path="/users" element={<UsersList />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;