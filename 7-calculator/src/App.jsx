import { useState } from "react"
import Display from "./components/Display"
import NumberPad from "./components/NumberPad"

function App() {
  const [displayVal, setDisplayVal] = useState('');
  
  return ( <div>
    <h1 className="text-4xl font-bold text-center mb-4 uppercase underline">Calculator</h1>
        <div className= "w-64 border-2 border-blue-950 m-auto p-4 h-96">
        <Display textToShow={displayVal} />
        <NumberPad displayVal={displayVal} setDisplayVal={setDisplayVal} />  
      </div>
    </div>
  )
}

export default App
