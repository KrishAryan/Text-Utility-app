import React,{useState} from 'react'



export default function TextForm(props) 
{
  const [text,setText]=useState("");
  
  function arrayRemove(arr, value) { 
          return arr.filter(function(ele){ 
          return ele !== value; 
      });
  }
  function handleUpClick(){
    
    setText(text.toUpperCase());
    props.showAlert("Your text has been converted to Uppercase","success")
  }
  function handleDownClick(){
    setText(text.toLowerCase())
    props.showAlert("Your text has been converted to Lowercase","success")
  }
   function handleOnChange(event){

    setText(event.target.value);
  }
  function handleClearText(){
    setText("");
    props.showAlert("Your text has been cleared","success")
  }
  function wordCount(text){
    if(text==="")
      return 0;
    else 
    {
      text=text.split(/\s+/)

      text=arrayRemove(text,"");
    return text.length;
  }
}
  function handleCopy(){
    
    navigator.clipboard.writeText(text);
    props.showAlert("Your text has been copied to clipboard","success")
  }
  function removeExtraSpaces(){
    
    let newText=text.split(/[  ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces are removed","success")
  }

  return (
   <>
      <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
          <div >
            <h1>{props.header}</h1>
            <textarea className="form-control"  style={{backgroundColor: props.mode==="dark"?"rgb(38 61 84)":"white",color:props.mode==="dark"?"white":"black"}} value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleDownClick}>Convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary" onClick={handleClearText}>Clear text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleCopy}>
            Copy text</button>
            <button disabled={text.length===0} className="btn btn-primary" onClick={removeExtraSpaces}>Remove extra spaces</button>
          
          

      </div>
      <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
        <h1>Your text summary</h1>
        <p>{wordCount(text)} words,{text.length} characters</p>
        <p>Minutes to read: {0.008*(text.split("").length)} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
   </>
  )
}
