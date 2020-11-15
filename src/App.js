import React, { useState, useEffect } from 'react';
import './App.css';

const URL = 'https://api.thecatapi.com/v1/images/search'

function App() {
  const [cats, setCats] = useState([])

  const getData = async () => {
    const response = await fetch(URL)
    const cats = await response.json()
    setCats(cats)
    console.log(cats)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      {cats.map(cat => {
        const { url, id } = cat
        return (
          <img src={url} alt={id} />
        )
      })}        
      <h1>infos</h1>
    </div>
  );
}

export default App;
