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
    if(text=="")
      return 0;
    else 
    return text.split(" ").length;
  }

  return (
   <>
      <div className="container">
          <div className="mb-3">
            <h1>{props.header}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="9"></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-3" onClick={handleDownClick}>Convert to Uppercase</button>
          <button className="btn btn-primary" onClick={handleClearText}>Clear text</button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{wordCount(text)} words,{text.length} characters</p>
        <p>Minutes to read: {0.008*(text.split("").length)} minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
   </>
  )
}
