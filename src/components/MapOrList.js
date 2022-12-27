import React from 'react'
import {useState} from 'react';

export default function MapOrList({setMapOrList, mapOrList}) {
  
  const [style, setStyle] = useState({backgroundColor:"#051c30"})

  const clickMap = () =>{
    setMapOrList(true);
    console.log(`harita`);
  }
  const clickList = () =>{
    setMapOrList(false);
    console.log(`liste`);
  }
  return (
    <div className = "mol-border">
      <a className = "mol-item" 
       style ={mapOrList?style:null}
       onClick = {()=>clickMap()}>
       Harita</a>

      <a className = "mol-item" 
      style ={!mapOrList?style:null} 
      onClick = {()=>clickList()}>
      Liste</a>
    </div>
  )
}
