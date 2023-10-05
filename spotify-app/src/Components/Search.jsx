import React from 'react'
import "../index.css"
import Searchcard from "./Searchcard"
const Search = () => {
  const txt="Podcast"
  const img="library.jpg"
  

  return (
    <div className='searchdiv'>
      <h2 style={{color:"white" ,paddingLeft:"10px"}}>Browse all</h2>
  
     <div className='podcastdiv1'>

      <Searchcard txt="podcast" img="podcacst.jpg"  color="yellow"/>
      <Searchcard txt="Tamil" img="music.jpg"      color="purple"  />
      <Searchcard txt="Engilsh" img="library.jpg"      color="red"/>
      <Searchcard txt="Hindi" img="library.jpg"      color="brown"/>
      <Searchcard txt="Marati" img="library.jpg"      color="blue"/>
      <Searchcard txt="Bengali" img="library.jpg"      color="grey"/>
      <Searchcard txt="Punjabi" img="library.jpg"      color="lightgreen"/>
      <Searchcard txt="odia" img="library.jpg"     color="yellow"/>
      <Searchcard txt="assmai" img="library.jpg"      color="rgb(141, 103, 171)"/>
      <Searchcard txt="podcast" img="library.jpg"      color=" rgb(240, 55, 165)"/>
      <Searchcard txt="podcast" img="library.jpg"      color="rgb(215, 242, 125)"/>
      <Searchcard txt="podcast" img="library.jpg"      color="rgb(141, 103, 171)"/>
      <Searchcard txt="podcast" img="library.jpg"      color="rgb(232, 17, 91)"/>
      <Searchcard txt="podcast" img="library.jpg"      color="rgb(115, 88, 255)"/>
      <Searchcard txt="podcast" img="library.jpg"      color="rgb(20, 138, 8)"/>
      <Searchcard txt="podcast" img="library.jpg"      color="rgb(175, 40, 150)"/>
      <Searchcard txt="podcast" img="library.jpg"      color=" rgb(235, 30, 50)"/>
     
      {/* <Searchcard txt="podcast" img="library.jpg"      color=""/>
      <Searchcard txt="podcast" img="library.jpg"      color=""/>
      <Searchcard txt="podcast" img="library.jpg"      color=""/>
      <Searchcard txt="podcast" img="library.jpg"      color=""/>
      <Searchcard txt="podcast" img="library.jpg"      color=""/>
      <Searchcard txt="podcast" img="library.jpg"      color=""/>
      <Searchcard txt="podcast" img="library.jpg"      color=""/>
      <Searchcard txt="podcast" img="library.jpg"      color=""/>
      <Searchcard txt="podcast" img="library.jpg"      color=""/>
      <Searchcard txt="podcast" img="library.jpg"      color=""/>
      <Searchcard txt="podcast" img="library.jpg"      color=""/>
      <Searchcard txt="podcast" img="library.jpg"      color=""/>
      <Searchcard txt="podcast" img="library.jpg"      color=""/>
      <Searchcard txt="podcast" img="library.jpg"      color=""/>
      <Searchcard txt="podcast" img="library.jpg"      color=""/>
      <Searchcard txt="podcast" img="library.jpg"      color=""/> */}
     </div>

    
    
    </div>
  )
}

export default Search
