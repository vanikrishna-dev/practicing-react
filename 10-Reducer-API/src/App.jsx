import { useReducer, useRef } from "react"

const counterReducer = (currentState, action) => {
  let newState = currentState;

  switch (action.type){
    case 'INCREMENT':
      newState += 1;
      break;
      case 'DECREMENT':
        newState -= 1;
        break;
      case 'RESET':
        newState = 0;
        break;
      case 'DOUBLE':
        newState *= 2;
        break;
      case 'CHANGEBY':
        newState = newState + parseInt(action.payload.num);
        break;
      default:
        break;

  }
  return newState;
}

function App() {

  const initialState = 0;
  const changeByInput = useRef();
  const [ counterVal , counterDispatch] = useReducer(counterReducer, initialState)

  const handleIncrement = () => {
    counterDispatch({
      type: "INCREMENT"
    })
  };

  const handleDecrement = () => {
    counterDispatch({
      type: "DECREMENT"
    })
  };

  const changeByInputHandler = () => {
    const num = changeByInput.current.value;
    changeByInput.current.value = '';
    counterDispatch({
      type: "CHANGEBY",
      payload: { num }
    })
  };

  return (
    <>
      <h1 className="text-5xl text-center underline m-4">Reducer API Count</h1>
      <br />
      <h2 className="text-3xl ml-7">Count: {counterVal} </h2>
      <br />
      <button className="text-xl p-2 m-2 border-2 border-black" onClick={handleIncrement}>Increment</button>
      <button className="text-xl p-2 m-2 border-2 border-black" onClick={handleDecrement}>Decrement</button>
      <button className="text-xl p-2 m-2 border-2 border-black" onClick={() => counterDispatch({type:"RESET"})}>Reset</button>
      <button className="text-xl p-2 m-2 border-2 border-black" onClick={() => counterDispatch({type:"DOUBLE"})}>Double</button>
      <br />
      <br />
      <button className="text-xl p-2 m-2 border-2 border-black" onClick={changeByInputHandler}>Change By</button>
      <input className="text-xl p-2 border-2 border-black" type="text" placeholder="Number" ref={changeByInput} />
    </>
  )
}

export default App
