import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';



function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    fetch('http://[::1]:3000/users')
      .then(r => r.json())
      .then(user => setUser(user))
    }, [])  

    console.log(user)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
