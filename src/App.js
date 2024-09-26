import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";

const App=()=>{

  const [user,setuser]=useState([
    {
        username:"Indhu",
        password:"1234"
    }
])
  return(<>
   <BrowserRouter>

<Routes>
<Route path="/" element={<Login user={user} setuser={setuser}></Login>}></Route>
<Route path="/Signup" element={<Signup user={user} setuser={setuser}></Signup>}></Route>
<Route path="/Landing" element={<Landing/>}></Route>
</Routes>
</BrowserRouter>
  </>)
}

export default App;
