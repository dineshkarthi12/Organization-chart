import React, { useState } from 'react';
import { users } from './users';
import './App.css';
import ExampleChart from './ExampleChart';

function App() {
  const[query, setQuery] = useState("")
  return (
    <div className="App">
      <h1 className='header'>Organization chart</h1>
        <input type="text" placeholder="search..." className="search" onChange={(e)=> setQuery(e.target.value)}></input>
        <ExampleChart  />
        <ul className="list" >
          {users.filter(user=>user.Name.toLowerCase().includes(query)).map((user)=>(
            <li key={user.id} className="listItem" >  {user.Name} <br /> {user.designation} </li>
          ))}
        </ul>
    </div>
  );
}

export default App;
