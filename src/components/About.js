import React,{useState} from 'react'

export default function About(props) {
  
    
    const [myStyle,setMyStyle]=useState({
        color:"black",
        backgroundColor:"white",
        border:"1px solid black",
    })
    
    
 
    
        /*if(props.mode==="light")
        {
            setMyStyle({
                color:"white",
        backgroundColor:"black",
        border:"1px solid white",
            })
        }
        else
       {
        setMyStyle({
            color:"black",
        backgroundColor:"white",
        border:"1px solid black",
        })} */
    
  return (
    <div className="container" style={{backgroundColor: props.mode==="dark"?"#142230":"white",color:props.mode==="dark"?"white":"black",border:"1px black"}}>
        <h1>About Us</h1>
    <div>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={{border:"1px  black"}}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button my-" style={{backgroundColor: props.mode==="dark"?"rgb(28 33 38)":"white",color:props.mode==="dark"?"white":"black", border:"1px solid black"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>About Developer</strong>
      </button>
    </h2>
    <div id="collapseOne"style={{backgroundColor: props.mode==="dark"?"rgb(28 33 38)":"white",color:props.mode==="dark"?"white":"black"}} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
         Hello, my name is Krish Aryan. I am a MERN fullstack web developer.If you want to contact me feel free to send me a text on <a href="https://twitter.com/KrishAr52562236">Twitter</a> ,<a href="https://www.linkedin.com/in/krish-aryan-171563154/">Linkedin</a>  or <a href="https://site-of-krisharyan.netlify.app/">my personal portfolio site</a>.
      </div>
    </div>
  </div>
 
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={{backgroundColor: props.mode==="dark"?"rgb(28 33 38)":"white",color:props.mode==="dark"?"white":"black"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>About Text Utilities</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={{backgroundColor: props.mode==="dark"?"rgb(28 33 38)":"white",color:props.mode==="dark"?"white":"black"}} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This website is built on using HTML,CSS,Javascript,React and Bootstrap.It is hosted on Netlify and is a static website.This website can perform basic string functions such as convert to uppercase/lowercase, clear text and copy to clipboard.Also this website gives a preview of the text and gives word and character count with time to read for an average person.This site has a dark mode feature too.
      </div>
    </div>
  </div>
  
  
  <div className="accordion-item" style={{border:"1px  black"}}>
    <h2 className="accordion-header"style={myStyle} id="headingThree">
      <button className="accordion-button collapsed"style={{backgroundColor: props.mode==="dark"?"rgb(28 33 38)":"white",color:props.mode==="dark"?"white":"black"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Why I want to be a developer</strong> 
      </button>
    </h2>
    <div id="collapseThree" style={{backgroundColor: props.mode==="dark"?"rgb(28 33 38)":"white",color:props.mode==="dark"?"white":"black"}} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
          <li>There are new things to learn everyday</li>
          <li>There is a high demand of developers in the world now</li>
          <li>Anyone can learn to be a developer without even going to college</li>
          <li>Software developers are paid handsomely</li>
          <li>I love to solve problems with people</li>
        </ul>
      </div>
    </div>
    
  </div>
</div>
    </div>
    
    </div>
  )
}
