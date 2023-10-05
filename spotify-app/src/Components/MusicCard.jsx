import React from 'react'
import '../musicCard.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const MusicCard = (props) => {
 
// let props={pic:"ddd",name:"dd"}
// let a=[1,2,3]
// const[x,y,z]=a
  // const {pic,name}=props
  
  return (
    <div className='card'>
     <div className='Cardimg'>
     <div className='imgContainer'>
     <img src={props.pic} alt=""  style={{height:"140px",width:"140px",paddingTop:10}} />
     </div>
      <div className='playbtn'>
      <PlayArrowIcon  style={{backgroundColor:"black"}}/> 
      </div>
      {/* text in postcard */}
     <div  className='LineController' style={{backgroundColor:"red"}}>

    <h4 >{props.name}</h4>
 
     <div>
     <p style={{fontStyle:"oblique"}} >{props.text}</p>
     </div>
    
     </div>
     </div>
    </div>
  )
}

export default MusicCard
