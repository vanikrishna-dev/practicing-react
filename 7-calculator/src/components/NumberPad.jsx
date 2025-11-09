import Button from "./Button";

const NumberPad = ({displayVal, setDisplayVal}) => {
    
    const numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
    const operations = ["+", "-", "*", "/"]

    const addToDisplay = (text) => {
        setDisplayVal(displayVal + text);
    }  
    
    const evaluateExpression = () => {
        const result = eval(displayVal);
        setDisplayVal(result); 
    }

    return <>
    <div className="text-center text-xl w-40 m-auto">
    <Button text="C" onClickHandler={() => setDisplayVal('')} />
    {numberList.map(text => <Button key={text} text={text} onClickHandler={() => addToDisplay(text)} />)}
    {operations.map(text => <Button key={text} text={text} onClickHandler={() => addToDisplay(text)} />)}
    
    <Button text="=" onClickHandler={evaluateExpression } />
    </div>
    </>
    
};

export default NumberPad;