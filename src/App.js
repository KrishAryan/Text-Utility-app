
import {useState} from "react";
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';



function App() {
  const [mode,setMode]=useState("light");
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="rgb(20 34 48)";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
    }
  }
  
  return (
    <>
      
      <Navbar title="Text Utilities" toggleMode={toggleMode} mode={mode} about="About Text Utilities"/>
      <div className="container my-3">
        <TextForm header="Your Text" mode={mode}/>
      </div>
      {/*<div className="container my-3">
        <About mode={mode} />
      </div>*/}
      
    </>
  );
  
}

export default App;
