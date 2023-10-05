import React from "react";
import "../Search.css"
import { RotateRight } from "@mui/icons-material";
const Searchcard=(props)=>{
   console.log(props)
             return(
                <div className="searchcard" style={{backgroundColor:props.color}}>
                <h2 >{props.txt}</h2>
                <div className="image">
                <img src={props.img} alt="" style={{height:"100px",width:"100px" ,rotate:"25deg"}}/>
                </div>
                </div>
             )

}
export default Searchcard