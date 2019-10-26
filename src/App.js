import React,{useEffect, useState} from 'react';
import Food from './Food';
import './App.css';
import { async } from 'q';
require('dotenv').config();
const App = () => {
  
  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' placeholder='chicken' value={search} onChange={updateSearch}></input>
        <button className='search-btn' type='submit'>
          Search
        </button> 
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Food 
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients} />
        ))}
      </div>    
    </div>
  );
}

export default App; 
