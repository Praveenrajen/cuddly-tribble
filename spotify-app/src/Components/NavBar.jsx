import react from "react"
import { Link, Route, Routes } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import { colors } from "@mui/material";
import MusicCard from "./MusicCard";
import { Home, Search, Style } from "@mui/icons-material";
const NavBar = () => {
    return (
        <div className="main">
        
            <div className="leftNav">

                <div className="Navhome" >
                   <div className="Left1">
                    <Link to="/Home" activeClassName="active" className="iconAlignment"  > <HomeIcon /><h4 > Home</h4></Link>
                    <Link to="/search"  className="iconAlignment"><SearchSharpIcon /><h4> Search</h4></Link>
                    
                   </div>
                   

                    
                    
                </div>

                <div className="Navlib">
                   <div className="left2">
                   <h3><LibraryAddIcon /> Your Library</h3>
                   </div>
                   <div className="playlist">
                       <h3 style={{padding:"20px 0px 0px 5px"}}>Create your first playlist</h3>
                       <h4 style={{padding:"0px 0px 0px 5px"}}>it's easy,we'll help you</h4>
                       <button className="creatsonglist" style={{padding:"5px 5px 5px 5px",borderRadius:"500px",backgroundColor:"white" ,height:"30px",width:"40%"}} >create your playlist</button>
                   </div>

                </div>


            </div>



            
       

        </div>

    )
}
export default NavBar