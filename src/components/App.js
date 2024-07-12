
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import "@babel/polyfill";
import axios from "axios";

const App = () => {
  const [data,setData]=useState("");
  const [err,setErr]=useState("")
  useEffect(()=>{
async function fetchdata(){
  try{
  const res=await fetch(" https://dummyjson.com/products");
 const data=await res.json();
  setData(data)}
  catch(err)
  {
   setErr(err.message);
  }

}
fetchdata();
  },[])
  console.log(data.products)
  return (

    <div>
      {
        err?<div>{err}</div>:
      
      
        data!=""?<div><h1>Data Fetched from API</h1><pre>{JSON.stringify(data,null,2)}</pre></div>:<div>Loading...</div>
      
      }
    </div>
  )
}

export default App
