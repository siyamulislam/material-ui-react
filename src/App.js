import './App.css';
import { Button, Fab } from '@mui/material';
import { Add, AddIcCall, Favorite, LinkedCamera, SmsFailed, ThumbDown, ThumbUp } from '@mui/icons-material';
import { useEffect, useState } from 'react';

function App() {
  const [liked, setLiked] = useState(false)
  const [likedColor, setLikedColor] = useState('')
  const [dislikedColor, setDislikedColor] = useState('')
  const handelLike = () => {
    const color = likedColor ? '' : 'blue';
    setLikedColor(color);
    setLiked(true);
    const altColor = !likedColor ? '' : 'blue';
    setDislikedColor(altColor);
  }
  const handelDislike = () => {
    const color = dislikedColor ? '': 'blue';
    setDislikedColor(color);
    const altColor = !dislikedColor ? '' : 'blue';
    setLikedColor(altColor);
    setLiked(false);
  }
  const [user, setUser] = useState([])
  const [user1, setUser1] = useState({})
  const [rUser, setRUser] = useState({})

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => (setUser(data)));

      fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => (setUser1(data)));

      fetch('https://randomuser.me/api') 
      .then(res =>res.json())
      .then(data=>setRUser(data.results[0]))
  }, []);

 console.log(rUser.gender);
  return (
    <div className="App">
      <header className="App-header">
        <Add/> 
        <Favorite/>
        <span><ThumbUp onClick={handelLike} style={{ color: likedColor }}/> <span><ThumbDown onClick={handelDislike} style={{ color: dislikedColor }} /></span></span>
        <Fab color="secondary" aria-label="add">
          <SmsFailed />
        </Fab>
        <Button variant="contained">Go </Button>
         {/* Short Circuit */}
        <h2>Gender: {rUser.name&& rUser.name.first}</h2> 
       {/* Advanced js (also can be with if else) */}
       <h2>Gender: { rUser.name?.first}</h2> 
        {user.map((user,index)=> {
          return <li key={index}>{user.name}</li>
        })}
      </header>
    </div>
  );
}
export default App;
