import React, { useState, useEffect } from 'react';
import './App.css';

const URL = 'https://api.thecatapi.com/v1/images/search'

function App() {
  const [cats, setCats] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(URL)
      const cats = await response.json()
      setCats(cats)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  } else {
    return (
      <div className='container'>
        <h1>Cats!</h1>
        <button type='submit' onClick={() => window.location.reload() }>Another Cat Please!</button>
        {cats.map(cat => {
          const { url, id } = cat
          return (
            <div className="App">
              <img src={url} alt={id} />
            </div>
          )
        })}        
      </div>
    );
  }
}

export default App;
