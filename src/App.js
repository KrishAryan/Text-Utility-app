import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title="Text Utilities" about="About Text Utilities"/>
      <div className="container my-3">
        <TextForm header="Your Text" text="hello"/>
      </div>
      
    </>
  );
  
}

export default App;
