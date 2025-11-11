import { useRef, useState } from "react"

const StateVsRef = () => {
    const [stateClick, setStateClick] = useState(0);
    const refClick = useRef(0);
    
    const onStateClickHandler = () =>{
      console.log("State clicked");
      setStateClick(stateClick+1);
    }

    const onRefClickHandler = () => {
      console.log("Ref clicked");
      refClick.current++;
    }   

  return (

    <>
       <h2>State Clicked: {stateClick} </h2>
       <h2>Ref Clicked: {refClick.current} </h2>
       <button onClick={onStateClickHandler}>State</button>
       <button onClick={onRefClickHandler}>Ref</button>
    </>
  );
};

export default StateVsRef;