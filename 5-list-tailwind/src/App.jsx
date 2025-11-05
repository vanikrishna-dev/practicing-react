import Heading from "./components/Heading"
import List from "./components/List"

 function App() {
  const studentArr = ["Abhishek", "Kajol", "Ravi", "Ajay", "Sanjay", "Shashi", "Sanjeev"]
  let studentArr2;
  return (
    <>
      <Heading></Heading>
      <br />
      <List list={studentArr}></List>
      <br />
      <List list={studentArr2}></List>
    </>
  )
} 
 
export default App
