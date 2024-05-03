<<<<<<< HEAD
import Footer from './assets/Footer'

function App() {
  

  return (
    <>
      <Footer/>
    </>
  )
}

export default App

=======
import Home from "./components/home/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

export default function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth/login" element={<Home/>}/>
      </Routes>
    </Router>
  )
}
>>>>>>> 4f1339d (Initial Commit)
