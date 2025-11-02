import Heading from "./components/Heading"
import List from "./components/List"

 function App() {
  const studentArr = ["Abhishek", "Kajol", "Ravi", "Ajay", "Sanjay", "Shashi", "Sanjeev"]
  return (
    <>
      <Heading></Heading>
      <br />
      <List list={studentArr}></List>
    </>
  )
} 
 
export default App
