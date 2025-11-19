import { useContext } from "react";
import CountContext from "./store/CountContext";


function App() {
  
  const { changeByHandler, decrementHandler, incrementHandler, counterVal, counterDispatch, changeBy } = useContext(CountContext);

  return (
      <div>
       <h1 className="text-5xl m-5">Count: {counterVal} </h1>
       <div>
          <button className="text-xl p-2 m-1 ml-5 border-2 border-black" onClick={incrementHandler}>INCREMENT</button>
          <button className="text-xl p-2 m-1 ml-5 border-2 border-black" onClick={decrementHandler}>DECREMENT</button>
          <button className="text-xl p-2 m-1 ml-5 border-2 border-black" onClick={() => {counterDispatch({type: 'DOUBLE'})}}>DOUBLE</button>
          <button className="text-xl p-2 m-1 ml-5 border-2 border-black" onClick={() => {counterDispatch({type: 'RESET'})}}>RESET</button>
          <br />
          <button className="text-xl p-2 m-1 ml-5 border-2 border-black" onClick={changeByHandler}>CHANGE BY</button>
          <input className="text-xl p-2 m-2 border-2 border-black" type="text" ref={changeBy} placeholder="Enter the number"/>
        </div>
      </div>
  )
}

export default App
