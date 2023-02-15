import { useState } from 'react';
import './App.css'
import Login from './components/login/Login';
import Vote from './components/vote/Vote';

function App() {
  const [hasVoted, setHasVoted] = useState(false)
  const [isLogIn, setIsLogIn] = useState(false)
  console.log('isLogIn', isLogIn)
  if(!isLogIn){
    return <Login setIsLogIn={setIsLogIn}></Login>
  } else {
    return <Vote setHasVoted={setHasVoted}></Vote>
  }
}

export default App
