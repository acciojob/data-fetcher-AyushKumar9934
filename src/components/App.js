
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import "@babel/polyfill";

const App = () => {
  const [data,setData]=useState("");
  useEffect(()=>{
async function fetchdata(){
  const res=await fetch(" https://dummyjson.com/products");
 const data=await res.json();
  setData(data);

}
fetchdata();
  },[])
  return (
    <div>
      {
        data!=""?<div><h1>Data from Api</h1><p>{JSON.stringify(data)}</p></div>:<div>Loading...</div>
      }
        
    </div>
  )
}

export default App
