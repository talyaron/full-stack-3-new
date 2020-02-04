import React from 'react';

import './App.css';

import Movie from './model/Movie'


const App = () => {

  const movie: string = showMovie({ director: 'roman', name: 'ben', year: 1960, length: 54 })

  return (
    <div className="App">
      hi {movie}
    </div>
  );



  function showMovie(movie: Movie): string {
    return `${movie.name} was directed by ${movie.director} at ${movie.year} and is ${movie.length} minutes long`
  }


}

export default App;
