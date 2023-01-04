import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import About from "./routes/About";
import {Route,Routes} from "react-router-dom";
import {useState,useEffect} from "react";
import { SyncLoader } from "react-spinners";


const override : cssProperties = {
  display: "block",
  margin: "auto 0",
  borderColor: "white",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  width:"100%",
  height:"100vh"
};


function App() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>
    {
        setLoading(false)
    },3000)
  },[])
  return (
    <div>
    {
      loading?
      <SyncLoader color="rgb(218, 59, 85)" loading={loading} cssOverride={override} size={30}/> :
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    }
      
    </div>
  );
}

export default App;
