import { Home, Search } from '@mui/icons-material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
const TopNav = () => {
  return (
    <div className="rightSideNav">
    {/* the below div is top navigation container */}
<div className="NavRight">
{/* in the NavRight the below is left side container */}
                <div className="Arrow">
                   <button style={{backgroundColor:"#121212" ,color:"white" ,borderRadius:"70%"}}>< KeyboardArrowLeftIcon/></button>
                   <button style={{backgroundColor:"#121212" ,color:"white",borderRadius:"70%"}}><KeyboardArrowRightIcon/></button>
                </div>
           
                 {/* search input nav starts here */}
                 <div >

                    <div className='searchBar'>
                      <div className='iconsearch'><SearchIcon/></div>
                      <div ><input type="text" placeholder='What do you want to listen to?' className='searchinput'/></div>
                       
                    </div>
                 </div>
{/* in the NavRight the below is right side container */}
           {/* <div style={{display:"flex"}}> */}

{/* Premium support text container */}
           <div className="NRContainer">
             <ul className="NRlist">
              <li>Premium</li>
             
              <li>Support</li>
               
              <li>Download</li>

              <li><button className="Signup">Sign up</button></li>
              <li><button className="Login">Login</button></li>
              <li><button className="NRdot"><MenuIcon/></button></li>
             </ul>
             </div>
{/* sign in and login button container */}
      


              
            </div>


{/* <MusicCard/>
<MusicCard/>

<MusicCard/> */}



           
</div>
  )
}

export default TopNav
