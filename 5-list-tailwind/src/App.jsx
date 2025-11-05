import Heading from "./components/Heading"
import List from "./components/List"
import Subheading from "./components/Subheading";

 function App() {
  const studentArr = ["Abhishek", "Kajol", "Ravi", "Ajay", "Sanjay", "Shashi", "Sanjeev"]
  let studentArr2;
  return (
    <>
      <Heading></Heading>
      <br />
      <Subheading batch="1"></Subheading>
      <br />
      <List list={studentArr}></List>
      <br />
      <List list={studentArr2}></List>
    </>
  )
} 
 
export default App
