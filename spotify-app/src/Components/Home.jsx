import React from "react";
import MusicCard from "./MusicCard";
import "./Home.css"

const Home=()=>{



const car={brand:"MG",color:"red",price:"23L" }
const student={name:"xxyy",rollno:123,phno:98654676}

console.log(student.name);
console.log(car.brand);
return(
    <div className="homeGrid">
    {/* <div style={{}} className="homejxRow1"> */}
    <MusicCard  pic="headphones.jpg"  name="Angels like you " text="vibe with piano boys" />
    <MusicCard  pic="music2.jpg"   name="Despacitpo" text="All hits of the year"/>
    <MusicCard pic="runningMusic.jpg" name="run to make yourself healthy" text="keep clam and focus with ambient"/>
    <MusicCard pic="samsungMusic.jpg" name="Beats to think" text="Focus with deep techno"/>
    <MusicCard pic=" recordPlayer.jpg" name="get ready to hear " text=""/>
    {/* </div> */}

    {/* <div className="homejxRow2"> */}
<MusicCard pic="handMusic.jpg" name="listen and get losted" text="return to 90s"/>
<MusicCard pic="handMusic.jpg" name="listen and get losted" text="return to 90s"/>
<MusicCard pic="handMusic.jpg" name="listen and get losted" text="return to 90s"/>
<MusicCard pic="handMusic.jpg" name="listen and get losted" text="return to 90s"/>
<MusicCard pic="handMusic.jpg" name="listen and get losted" text="return to 90s"/>
    {/* </div> */}

    {/* <div className="homejxROw3"> */}
    <MusicCard pic="handMusic.jpg" name="listen and get losted" text="return to 90s"/>
<MusicCard pic="handMusic.jpg" name="listen and get losted" text="return to 90s"/>
<MusicCard pic="handMusic.jpg" name="listen and get losted" text="return to 90s"/>
<MusicCard pic="handMusic.jpg" name="listen and get losted" text="return to 90s"/>
<MusicCard pic="handMusic.jpg" name="listen and get losted" text="return to 90s"/> 
    {/* </div> */}

    </div>
)
}

export default Home