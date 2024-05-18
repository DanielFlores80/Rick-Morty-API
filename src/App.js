//import logo from './logo.svg';
import './App.css';
import imagen1 from './assets/rickMorty.png';
import {useState} from 'react';
import Characters from './components/characters';


function App() {
  const [characters, setCharacters] = useState(null)

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    console.log(api);
    const characterApi = await api.json();
    console.log(characterApi);
    
    console.log(characters);
    setCharacters(characterApi.results);
    console.log(characters);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title" >Rick and Morty</h1>
        {
          characters ? (<Characters characters= {characters}></Characters>
        ):(
          <div>
          <img src={imagen1} className="img-home" alt="logo" />
            <button onClick={reqApi} className="btn-search" >
              Buscar personaje
            </button>
            </div>

          )}
        
        
        
      </header>
    </div>
  );
}

export default App;
