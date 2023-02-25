import React, {useState} from 'react';

export default function TextForm(props) {

    const changeUppercase = () =>{
        setText(text.toUpperCase())
        props.showAlert("converted to uppercase", "success");
    }

    const TextChange = (event) =>{
        setText(event.target.value);
    }

    const changeLowercase = () =>{
        setText(text.toLowerCase());
        props.showAlert("converted to lowercase", "success");
    }

   const trim = () =>{
    setText(text.trim());
    props.showAlert("text trimed", "success");
   }

   const copyText = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert("text copied", "success");
   }

    const clear = () =>{
        setText("");
        props.showAlert("text cleared", "success");
    }

    


    const [text, setText] = useState("");

    return (
        <>
            <div className="container">
                <h1 className="text-center text-sm py-4" style={{color: props.mode=="light"?props.textcolor:"white"}}>Enter Text Here</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{resize:'none', height:'15rem', color: props.mode=="light"?props.textcolor:"white", backgroundColor: props.mode=="light"?props.navbarColor:"#212529"}} value={text} placeholder="Enter Text" onChange={TextChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button" onClick={changeUppercase}>Uppercase</button>
                    <button className="btn btn-primary" type="button" onClick={changeLowercase}>Lowercase</button>
                    <button className="btn btn-primary" type="button" onClick={trim}>Trim</button>
                    <button className="btn btn-primary" type="button" onClick={copyText}>Copy</button>
                    <button className="btn btn-primary" type="button" onClick={clear}>Clear</button>

                    <p  style={{color: props.mode=="light"?props.textcolor:"white"}}>{text===""?0:text.trim().split(/\s+/).length} words and {text.length} character</p>
                    <p  style={{color: props.mode=="light"?props.textcolor:"white"}}>{0.008 * text.split(" ").length} minutes read</p>
                    <h3  style={{color: props.mode=="light"?props.textcolor:"white"}} className="text-center">Preview</h3>
                    <p  style={{color: props.mode=="light"?props.textcolor:"white"}}>{text.length<1?"Please Enter Something":text}</p>
                </div>
            </div>
        </>
    )
}
