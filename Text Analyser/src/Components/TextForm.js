import React, { useState } from 'react'

export default function TextForm(props) {

    const [text,setText] = useState("");

    // const [myStyle,setMyStyle] = useState({
    //     color:"black",
    //     backgroundColor:"white"
    // })

    // const toggleBtn = () => {
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color:"black",
    //             backgroundColor:"white"
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:"white",
    //             backgroundColor:"black"
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }
    
    const handleUpClick = () => {
        // console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Block Letters","primary")
    }
    
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    
    const handleClearBtn = () => {
        // console.log("TextArea Cleared");
        setText("");
        props.showAlert("Text Cleared","secondary")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase Letters","primary")
    }

    const handleFindClick = () => {
        let findStr = document.querySelector("#findText").value;
        let repStr = document.querySelector("#repText").value;
        setText(text.replaceAll(findStr,repStr));   
        props.showAlert("Words Replaced","success")     
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied To Clipboard","success");
    }

    return (
        <div className = " p-4" style={{color: props.mode === 'light'? "black" : "white"}}>
            <div className='container' >
                <h2 >{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'? "#042743" : "white",color:props.mode === 'dark'? "white" : "black"}} placeholder='Enter Your text' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleUpClick} >Convert to Block</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-secondary m-1" onClick={handleClearBtn} >Clear</button> 
                <input disabled={text.length === 0} type="text" placeholder='Enter your text to Search' id='findText' className='m-1 py-1 me-2'/>
                <input disabled={text.length === 0} type="text" placeholder='Enter your text to Replace' id='repText' className='m-1 py-1 me-2'/>
                <button disabled={text.length === 0} className='btn btn-success m-1' onClick={handleFindClick}>Search and replace</button>               
                <button disabled={text.length === 0} className='btn btn-success m-1' onClick={handleCopy}>Copy Text</button>               
            </div>

            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((ele) => {return ele.length !== 0}).length} words, {text.length} characters</p>
                <p>{0.08 * text.split(/\s+/).filter((ele) => {return ele.length !== 0}).length} Words per Minutes</p>
                <h3>Preview:</h3>
                <p>{text.length > 0 ? text : "Enter Something to Preview"}</p>
            </div>

        </div>
    )
}
