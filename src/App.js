import './App.css';
import React from 'react';
import Row from './Row';
import requests from './requests';


function App() {
  return (
    <div className="App">
    <h1>Hello CK</h1>
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;

//ef913272abffb75bf90405ba8b87f18b
