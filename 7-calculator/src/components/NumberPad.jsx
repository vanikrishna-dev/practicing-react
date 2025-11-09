import Button from "./Button";

const NumberPad = ({displayVal, setDisplayVal}) => {
    
    const numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const operations = ["+", "-", "*", "/"]

    const addToDisplay = (text) => {
        setDisplayVal(displayVal + text);
    }  
    
    const evaluateExpression = () => {
        const result = eval(displayVal);
        setDisplayVal(result); 
    }

    return <>
    <Button text="C" onClickHandler={() => setDisplayVal('')} />
    <br />
    {numberList.map(text => <Button key={text} text={text} onClickHandler={() => addToDisplay(text)} />)}
    <br />
    {operations.map(text => <Button key={text} text={text} onClickHandler={() => addToDisplay(text)} />)}
    <br />
    <Button text="=" onClickHandler={evaluateExpression } />
    
    </>
    
};

export default NumberPad;