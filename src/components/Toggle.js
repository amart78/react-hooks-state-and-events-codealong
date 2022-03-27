// The button should say "OFF" when it is first displayed
// When the button is clicked, it should say "ON" & the background color should be red
// When the button is clicked again, it should say "OFF" & the background color should be white again

import React, {useState} from "react";

function Toggle() {

  const [isOn, setIsOn] = useState(false);

  function handleClick(){
    setIsOn( (isOn) => !isOn);
  }
  
  const color = isOn ? "red" : "white";
  
  return(
    <button onClick = {handleClick} style = { {background:color} } >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
