import React from "react";
import memesArray from './memesData.js';

function Memef (){
    const urlnew = memesArray [1].url; 
    
    const [meme, setMeme] = React.useState({
        toptext: "",
        bottomtext: "",
        url: "https://imgflip.com/s/meme/Woman-Yelling-At-Cat.jpg"
    });
  
    function getMemeImage(){            
        setMeme(prevmeme => {return {...prevmeme, url: urlnew}})
    }
  
    return(
        <main>
            <div className='form'>
                <input type="text" placeholder='Top text'></input>
                <input type="text" placeholder='Bottom text'></input>
                <button onClick={getMemeImage}>Generate</button>
            </div>
            <img className='meme' src={meme.url}></img>
            <p>{meme.toptext}</p>
            <p>{meme.bottomtext}</p>
        </main>
    )
  }

export default Memef;