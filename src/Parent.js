import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("#FFF")

  function handleColorChange(newColor){ 
    // console.log('clicked')
    const newRandomColor = getRandomColor()
      setColor(newRandomColor)
      setChildColor(newColor)

  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color = {childColor} onChangeColor = {handleColorChange}/>
      <Child color={childColor} onChangeColor = {handleColorChange}/>
    </div>
  );
}

export default Parent;
