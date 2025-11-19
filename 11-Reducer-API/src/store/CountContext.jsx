import { useReducer } from "react";
import { useRef } from "react";
import { createContext } from "react";

const CountContext = createContext();

const counterReducer = (currentState, action) =>{
  
  let newState = currentState;

  switch(action.type){
    case 'INCREMENT':
      newState += 1;
      break;
    case 'DECREMENT':
      newState -= 1;
      break;
    case 'DOUBLE':
      newState *= 2;
      break;
    case 'RESET':
      newState = 0;
      break;
    case 'CHANGEBY':
      newState = newState + parseInt(action.payload.num);
      break;
    default:
      break;
  }
  return newState;
}


export const CountContextProvider = ({children}) => {
    const initialState = 0;
    const changeBy = useRef();
    const [counterVal, counterDispatch] = useReducer(counterReducer, initialState);
    
    const incrementHandler = () => {
        counterDispatch({
        type: 'INCREMENT'
        })
    }

    const decrementHandler = () => {
        counterDispatch({
        type: 'DECREMENT'
        })
    }

    const changeByHandler = () => {
        const num = changeBy.current.value;
        counterDispatch({
        type: 'CHANGEBY',
            payload: {num}
        })
    };

    const ContextVal = {counterDispatch, changeBy, changeByHandler, decrementHandler, incrementHandler, counterVal}

    return <CountContext.Provider value={ContextVal}>
        {children}
    </CountContext.Provider>
}

export default CountContext;
