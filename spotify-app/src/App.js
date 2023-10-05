import React from "react";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import MusicCard from "./Components/MusicCard";

import TopNav from "./Components/TopNav";
import Search from "./Components/Search";

const App=()=>{
  return(
      
       <div style={{display:"flex",height:"100%",width:"100%",backgroundColor:"black"}} >
         <div style={{width:"25%",position:"fixed"}} >
         <NavBar />
         </div>

        <div style={{width:"74%",paddingLeft:"2%",marginLeft:"auto" } }>
          <div>
          <TopNav/>
          </div>
          <div >
          <Routes>
          <Route path="/" element={<Home/>}/>
        <Route path="Home" element={<Home/>}/>
        <Route path="search" element={<Search/>}/>
        </Routes>
          </div>
        </div>
        {/* <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        </Routes> */}
         {/* <MusicCard/> */}
         
       </div>

  )
}
export default App