import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import React, { useState } from 'react';
import { Routes, Route} from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light");

  const [alert,setAlert] = useState(false);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("You Enabled Dark Mode","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("You Enabled Light Mode","success");
    }
  }

  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About TextUtils" mode = {mode} toggleMode = {toggleMode} />
      <Alert alert = {alert}/>
      <Routes>
        <Route path="/" element={<TextForm heading = "Enter the text to analyze below" mode = {mode} showAlert = {showAlert} />} />
        <Route exact path="about" element={<About />} />
      </Routes>      
    </>
  )
}

export default App;
