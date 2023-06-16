import Topbar from "../src/components/topbar/Topbar";
import Homepage from "./Pages/homepage/HomePage";
import Login from "../src/Pages/login/Login";
import Register from "../src/Pages/register/register";
import Settings from "./Pages/setting/Setting";
import Single from "../src/Pages/single/single";
import Write from "../src/Pages/write/Write";
import { BrowserRouter as BrowserRouter,Routes,Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App(){
  const {currentUser}=useContext(Context);
  return(
<>
<BrowserRouter>
<Topbar/>
<Routes>
<Route exact path="/" element={<Homepage/>}/>
<Route exact path="/register" element={ currentUser?<Homepage/>:<Register/>} />
<Route path="/login" element={currentUser ? <Homepage/>:<Login/>} />
<Route path="/post/:id" element={<Single/>}  />
<Route path="/write" element={currentUser ? <Write/> :<Register/>}/>
<Route path="/settings" element={currentUser ? <Settings/> :<Register/>}/>

</Routes>




</BrowserRouter>




</>

  )
}
export default App;