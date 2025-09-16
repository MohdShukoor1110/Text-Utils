import NavBar from "./Containers/NavBar";
import Alert from "./Containers/Alert";
import TextArea from "./Containers/TextArea";
import About from "./Containers/About";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light')
    const [alert, setAlert] = useState(null)

    const showAlert = (message, type)=> {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 2000);
    }
    const togleMode = () => {
        if (mode==='light') {
            setMode('dark')
            document.body.style.backgroundColor = 'lightgray'
            showAlert('Converted to Dark mode', 'secondary')
        } else {
            setMode('light')
            document.body.style.backgroundColor = 'white'
            showAlert('Converted to Light mode', 'light ')
        }
    }

    return (
        <>
        <Router>
            <NavBar title = 'TextUtils' mode={mode} togleMode={togleMode} />
            <Alert alert={alert} />
            <Routes>
                <Route path="/about" element={<About mode={mode} />} />  
                <Route path="/" element={<TextArea showAlert={showAlert} heading = 'Try TextUtils - Uppercase to Lowercase, Lowercase to Uppercase' mode={mode} />} />
            </Routes>
        </Router>
        </>
    );
}

export default App;