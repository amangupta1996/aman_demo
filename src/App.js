import React from 'react';
import Router from './Route';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure({ draggable: false, hideProgressBar: true, position: toast.POSITION.TOP_RIGHT });
function App() {
    return (
        <React.Fragment>
            <Router />
            <ToastContainer />
        </React.Fragment>
    );
}

export default App;
