import React from 'react'
import {useState} from 'react';

export default function MapOrList({setMapOrList, mapOrList}) {
  
  const [style, setStyle] = useState({backgroundColor:"#00B4DB", color:'white'})
  const [_style, _setStyle] = useState({backgroundColor:"", color:'white'})


  const onMouseOver = () =>{
    
    setStyle({backgroundColor:"white", color:"#153652"});
  }
  
  const _onMouseOver = () =>{
    
    _setStyle({color:"#153652",backgroundColor:"white"});
  }

  const onMouseLeave = () =>{
    if(mapOrList){
      setStyle({backgroundColor:"#00B4DB", color:'white'})
      _setStyle({backgroundColor:"", color:'white'})
    }
    else{
      setStyle({backgroundColor:"", color:'white'})
      _setStyle({backgroundColor:"#00B4DB", color:'white'})
    }
  }

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
      <a className = "mol-item" style ={style}
       onMouseEnter = {onMouseOver} 
       onMouseLeave = {onMouseLeave}
       onClick = {()=>clickMap()}>
       Harita</a>

      <a className = "mol-item" 
      style ={_style} 
      onMouseEnter = {_onMouseOver}
      onMouseLeave= {onMouseLeave}
      onClick = {()=>clickList()}>
      Liste</a>
    </div>
  )
}
