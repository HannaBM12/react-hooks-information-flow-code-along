import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

// function Child({color, onChangeColor}) {
//   // console.log({color}, {onChangeColor})
//   return <div 
//     className="child" 
//     style={{ backgroundColor: {color} }} 
//     onClick={()=> onChangeColor(getRandomColor())}/>;
// }

function Child(props) {
 
  return (
    <div
      onClick={() => props.onChangeColor(getRandomColor())}
      className="child"
      style={{ backgroundColor: props.color }}
    />
  );
} 

export default Child;
