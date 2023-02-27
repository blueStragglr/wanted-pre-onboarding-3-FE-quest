import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function CustomToast() {
    return (
        <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        />
    );
};