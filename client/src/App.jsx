import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import About from "./Pages/About"
import Header from "./components/Header"

const App = () => {
  return (
 <BrowserRouter>
 <Header/>
<Routes>
  
  <Route path="/" element= {<Home />}/>
  <Route path="/profile" element= {<Profile />}/>
  <Route path="/sign-in" element= {<SignIn />}/>
  <Route path="/sign-up" element= {<SignUp />}/>
  <Route path="/about" element= {<About />}/>
  
</Routes>
 </BrowserRouter>
  )
}

export default App