// const { useEffect } = require("react");

// useEffect(()=>{

//   return()=>{

//   };
// },[ ]);    

// import React,{useState,useEffect} from "react";
// function App(){
//   const [formData, setFormDat]= useState({
//      name:"",
//      email:"",
//      password:"",
//   });
//   //useEffect
//   useEffect(()=>{
//      console.log("form successfully updated", formData)
//   },[formData])
  
// }


import React,{useState,useEffect} from "react";

const App = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="">Name: <input type="text" /></label>
        <br />
        <label htmlFor="">Email: <input type="email" /></label>
        <br />
        <label htmlFor="">Email: <input type="text" /></label>
      </form>
    </div>
  )
}

export default App