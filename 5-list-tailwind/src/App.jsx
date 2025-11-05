import Heading from "./components/Heading"
import List from "./components/List"
import Subheading from "./components/Subheading";

 function App() {
  const studentArr = ["Abhishek", "Kajol", "Ravi", "Ajay", "Sanjay", "Shashi", "Sanjeev"]
  let studentArr2 = ["Ravi", "Amit"];
  const studentArr3 = ["Arushi", "Saniya", "Vipin", "Kartik", "Anmol"]
  return (
    <>
      <Heading></Heading>
      <br />
      <Subheading batch="1"></Subheading>
      <List list={studentArr}></List>
      <br />
      <Subheading batch="2"></Subheading>
      <List list={studentArr2}></List>
      <br />
      <Subheading batch="3"></Subheading>
      <List list={studentArr3}></List> 
    </>
  )
} 
 
export default App
