import Book from "./components/Book"
import "./App.css"
const App = () => {
  
  return (
    <div>
      <h1>
        <center>My Book Store</center></h1>
        <div className="app">
        <Book/>
        <Book/>
        <Book/>
        </div>
      
    </div>
  )
}

export default App
