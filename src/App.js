
import './App.css';
import { useState } from 'react'

function App() {

  const [pokemon, setPokemon] = useState([])

  const getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then(serverResponse =>{
        return serverResponse.json()
      })
      .then(actualResponse => {
        setPokemon(actualResponse.results)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="App">
      <h1>Pokemon via Fetch</h1>
      <button onClick={getPokemon}>Fetch Pokemon</button>

      <div>
        <ul>
          {
            pokemon.map((mon, i) => {
              return <li key={i}><a href={mon.url}>{mon.name}</a></li>
            }
          )}
        </ul>
      </div>

    </div>
  );
}

export default App;
