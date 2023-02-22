import { useState } from 'react'
import './App.css'
import PetList from './components/PetList'
import EventButtons from './components/EventButtons';

function App() {

const pets = [{ name: 'Kitty', photo: 'https://i.pinimg.com/564x/8e/46/5f/8e465f6e4663e0d642795fab0fb71875.jpg' }, 
{ name: 'Reggie', photo: 'https://i.pinimg.com/564x/42/57/3f/42573f025fffea0a35e9a71eb9c9f28b.jpg' }, 
{ name: 'Crumpet', photo: 'https://i.pinimg.com/564x/be/15/67/be15674b0dde9bb5d6f848b5bd6c9a39.jpg' }];

  return (
    <>
    <div className="App">
      
      <h1>Pets</h1>

<PetList items={pets} />

<EventButtons />

    </div>


    </>
  )
}

export default App
