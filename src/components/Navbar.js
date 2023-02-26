import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} `} style={{backgroundColor: props.mode==="light"?props.navbarColor:"#212529", color: props.mode==="light"?props.TextColor:"white"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{color: props.mode==="light"?props.textcolor:"white"}}>{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"  style={{color: props.mode==="light"?props.textcolor:"white"}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"  style={{color: props.mode==="light"?props.textcolor:"white"}}>About</Link>
              </li>

            </ul>

            <div className="d-flex flex-row align-items-center justify-content-between gap-50" style={{width: "20rem"}} >

              <div className="d-flex" style={{gap:"0.5rem"}}>
                <input type="color" onChange={props.changeNavcolor} value={props.navbarColor} className="form-control form-control-color" id="exampleColorInput" style={{width: "2.5rem"}}  title="Navbar Color" />
                <input type="color" onChange={props.changeBodyColor} value={props.bodyColor} className="form-control form-control-color" id="exampleColorInput" style={{width: "2.5rem"}}  title="Body Color" />
                <input type="color" onChange={props.changeTextColor} value={props.textcolor} className="form-control form-control-color" id="exampleColorInput" style={{width: "2.5rem"}}  title="Text color" />
              </div>

              <div className="form-check form-switch d-flex align-items-center gap-2">
                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckChecked" />
                <label className="form-check-label nav-link"  style={{color: props.mode==="light"?props.textcolor:"white"}} htmlFor="flexSwitchCheckChecked">Dark Mode</label>
              </div>

            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string
}

Navbar.defaultProps = {
  title: "please send props"
}