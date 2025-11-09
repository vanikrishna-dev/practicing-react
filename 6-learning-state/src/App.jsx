import { useState } from "react";
import List from "./components/List"

 function App() {
  let studentArr2;
  const studentArr3 = ["Arushi", "Saniya", "Vipin", "Kartik", "Anmol"]
  
  const [studentArr, setStudentArr] = useState(["Abhishek", "Kajol", "Ravi", "Ajay", "Sanjay", "Shashi", "Sanjeev"]);

  const onChangeHandler = (event) => {
    if(event.key === "Enter"){
    console.log(event.target.value);
    const newArr = [...studentArr, event.target.value];
    event.target.value="";
    setStudentArr(newArr);
    studentArr.push(event.target.value);
    console.log(studentArr);
    }
  }

  return (
    <>
      <h1>Learners of MERN Stack</h1>
      <br />
      <List list={studentArr}></List>
      <input type="text" placeholder="New Student name" onKeyDown={onChangeHandler}/>
      <br />
      <List list={studentArr2}></List>
      <br />
      <List list={studentArr3}></List> 
      
    </>
  )
}  

export default App
