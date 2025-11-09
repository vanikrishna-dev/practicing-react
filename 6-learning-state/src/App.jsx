import List from "./components/List"

 function App() {
  const studentArr = ["Abhishek", "Kajol", "Ravi", "Ajay", "Sanjay", "Shashi", "Sanjeev"]
  let studentArr2;
  const studentArr3 = ["Arushi", "Saniya", "Vipin", "Kartik", "Anmol"]
  
  const onChangeHandler = (event) => {
    if(event.key === "Enter"){
    console.log(event.target.value);
    studentArr.push(event.target.value);
    console.log(studentArr);
    }
  }

  return (
    <>
      <h1>Learners of MERN Stack</h1>
      <br />
      <List list={studentArr}></List>
      <br />
      <List list={studentArr2}></List>
      <br />
      <List list={studentArr3}></List> 
      <input type="text" placeholder="New Student name" onKeyDown={onChangeHandler}/>
    </>
  )
}  

export default App
