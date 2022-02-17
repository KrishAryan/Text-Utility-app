import React,{useState} from 'react'


export default function TextForm(props) {
  const [text,setText]=useState("");
  function handleUpClick(){
    
    setText(text.toUpperCase());
  }
  function handleDownClick(){
    setText(text.toLowerCase())
  }
   function handleOnChange(event){
   // console.log("On change");
    setText(event.target.value);
  }
  function handleClearText(){
    setText("");
  }
  function wordCount(text){
    if(text==="")
      return 0;
    else 
    return text.split(" ").length;
  }
  function handleCopy(){
    var newText=document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  }
  function removeExtraSpaces(){
    
    let newText=text.split(/[  ]+/);
    setText(newText.join(" "))
  }

  return (
   <>
      <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
          <div >
            <h1>{props.header}</h1>
            <textarea className="form-control"  style={{backgroundColor: props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}} value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
          </div>
          <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-3 my-3" onClick={handleDownClick}>Convert to Lowercase</button>
          <button className="btn btn-primary" onClick={handleClearText}>Clear text</button>
          <button className="btn btn-primary mx-3" onClick={handleCopy}>
            Copy text</button>
            <button className="btn btn-primary" onClick={removeExtraSpaces}>Remove extra spaces</button>
          
          

      </div>
      <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
        <h1>Your text summary</h1>
        <p>{wordCount(text)} words,{text.length} characters</p>
        <p>Minutes to read: {0.008*(text.split("").length)} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox"}</p>
      </div>
   </>
  )
}
