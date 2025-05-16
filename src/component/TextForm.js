import React from "react";
import { useState } from "react"; 

export default function TextForm(props){

    const handleUpClick =()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Upper case","Sucess");
    }
    const handleLowerClick =()=>{
        let newtext = text.toLocaleLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lower case","Sucess");
    }
    const handleClearClick =()=>{
        let newtext = ""
        setText(newtext);
    }
    const handleCopy =()=>{
        let  text = document.getElementById("myBox");
        navigator.clipboard.writeText(text.value);
    }
   const handleExtraSpace =()=>{
        let  newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleClickClear = () => {
        setText('');
    }

    const handleOnChange =(event)=>{
        setText(event.target.value);
    }

    const [text,setText] =useState("Enter your Text");
    return(
        <>
            <div className ="container my-2">
                <label htmlFor="myBox" className="form-label">{props.heading}</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} onClick={handleClickClear}  id="myBox" rows="8"></textarea>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Upper Case</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Lower Case</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            
            <div className="container my-2">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} word, {text.length} charcter</p>
                <p>{0.008 * text.split(" ").length} mintute read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Please enter text "}</p>
            </div>
        </>
    )
}