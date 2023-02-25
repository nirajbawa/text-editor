import React, {useState} from 'react'

export default function About(props) {

  return (
    <>
    <div className="accordion" id="accordionExample" >
    <div className="accordion-item" style={{backgroundColor: props.mode=="light"?props.navbarColor:"#111213", color: props.mode=="light"?props.TextColor:"white"}} >
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  style={{color: props.mode=="light"?props.textcolor:"white", backgroundColor: props.mode=="light"?props.bodyColor:"#212529"}}>
          About
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          This is simple text editor app created using react
        </div>
      </div>
    </div>
   
  </div>
</>
  
  
  )
}
