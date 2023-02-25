import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  let [darkMode, setDarkMode] = useState("light");
  let [alert, setAlert] = useState(null);

  let [textcolor, setTextColor] = useState("#000000");
  let [bodyColor, setBodyColor] = useState("#FFFFFF");
  let [navbarColor, setNavbarColor] = useState("#f8f9fa");

  const mode = () => {
    if (darkMode === "light") {
      darkMode = setDarkMode("dark");
      document.body.style.backgroundColor = "rgb(17 18 19)";
      showAlert("dark mode enable", "success");
    }
    else {
      darkMode = setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("dark mode disabled ", "success");
    }
  }


  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }


  const changeNavcolor = (event) => {
    setNavbarColor(event.target.value);
    console.log(navbarColor);
  }

  const changeBodyColor = (event) => {
    setBodyColor(event.target.value);
    document.body.style.backgroundColor = bodyColor;
  }

  const changeTextColor = (event) => {
    setTextColor(event.target.value);
    console.log(textcolor);
  }


  return (
      <Router>
        <Navbar title="Text Editor" mode={darkMode} navbarColor={navbarColor} bodyColor={bodyColor} textcolor={textcolor} toggleMode={mode} changeNavcolor={changeNavcolor} changeBodyColor={changeBodyColor} changeTextColor={changeTextColor} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={ <TextForm mode={darkMode} textcolor={textcolor} navbarColor={navbarColor} showAlert={showAlert} />}/>
          <Route exact path="/about"  element={<About mode={darkMode} navbarColor={navbarColor} textcolor={textcolor} bodyColor={bodyColor} showAlert={showAlert} />} />
        </Routes>
      </Router>

  );
}

export default App;
