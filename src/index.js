import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import memesArray from "./memesData.js"
import Memef from './Meme.js';
import Todo from './todolist.js';
import Products from './favaproduct.js';

function Header (){
  return (
    <header>
      <img src='./logo192.png'></img>
      <h2>Meme Generator</h2>
      <h3 className='end'>React Project 3</h3>
    </header>
  )
}

function Footer (){
  return (
    <footer>
      <h1>Footer</h1>
    </footer>
  )
}

function App (){
  return(
      <>
          <Header />
          <Memef />
          {/* <Todo /> */}
          {/* <Products /> */}
          <Footer />
      </>       
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
