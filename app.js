import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
 //bg changer
function App(){

   const [color, setColor] = useState("black");
//    document.body.style.backgroundColor = color;

console.log("Hello");
useEffect(()=> {
    console.log("useEffect Executed");
    document.body.style.backgroundColor = color;}
,[color])

   return(
    <>
    <h1>Background Color Changer</h1>
    <div className="but">
        <button  style={{backgroundColor:"Red"}} onClick={()=>setColor("red")}>Red</button>
        <button style={{backgroundColor:"Blue"}} onClick={()=>setColor("blue")}>Blue</button>
        <button style={{backgroundColor:"Orange"}} onClick={()=>setColor("orange")}>Orange</button>
        <button style={{backgroundColor:"Green"}} onClick={()=>setColor("green")}>Green</button>
        <button style={{backgroundColor:"Pink"}} onClick={()=>setColor("pink")}>Pink</button>
    </div>
    </>
    
   );
   

}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);