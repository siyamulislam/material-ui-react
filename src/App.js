import logo from './logo.svg';
import './App.css';
import { Button, Fab } from '@mui/material';
import { Add, AddIcCall, Favorite, LinkedCamera, SmsFailed, ThumbDown, ThumbUp } from '@mui/icons-material';
import { useState } from 'react';

function App() {
  const [liked,setLiked]=useState(false)
  const [likedColor,setLikedColor]=useState('')
  const [dislikedColor,setDislikedColor]=useState('')
  const handelLike=()=>{
    const color=likedColor? '':'blue';
    setLikedColor(color);
    setLiked(true);

    const altColor=!likedColor? '':'blue';
    setDislikedColor(altColor);
  }
  const handelDislike=()=>{
    const color=dislikedColor? '':'blue';
    setDislikedColor(color);
    
    const altColor=!dislikedColor? '':'blue';
    setLikedColor(altColor);
    setLiked(false);
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
         
        <Add/>
        <Favorite/>
        <span><ThumbUp onClick={handelLike} style={{color:likedColor}} /> <span><ThumbDown onClick={handelDislike} style={{color:dislikedColor}}/></span></span>
 
        
        <Fab color="secondary" aria-label="add">
        <SmsFailed/>
</Fab>
      <Button variant="contained">Hello World</Button>
      </header>
    </div>
  );
}

export default App;
