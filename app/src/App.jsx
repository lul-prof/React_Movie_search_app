import { use, useEffect, useState } from 'react';
import MovieLIst from './components/MovieLIst.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search.jsx';
import AddFavourites from './components/AddFavourites.jsx';
import Heading from './components/Heading.jsx';
import RemoveFavourites from './components/RemoveFavourites.jsx';

function App() {
  const[movies, setMovies] = useState([]);
  const [favourites, setFavourites]= useState([]);
  const [searchValue, setSearchValue]= useState('');
  const getMovieRequest=async()=>{
    const url=`http://www.omdbapi.com/?s=${searchValue}&apikey=1cd16c55`;
    const response = await fetch(url);
    const responseJson= await response.json();
    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  };
  useEffect(()=>{
    getMovieRequest(searchValue);
  },[searchValue]);

  useEffect(()=>{
    const movieFavourites=JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );
    if(movieFavourites){
      setFavourites(movieFavourites);
    }
  },[]);
   
  const saveToLocalStorage=(items)=>{
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };

  const addFavouriteMovie=(movie)=>{
    const newFavouriteList=[...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
    console.log(newFavouriteList);
  };

  const removeFavouriteMovie=(movie)=>{
    const newFavouriteList=favourites.filter(
      (favourite)=>favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
  };

  return (
    <>
      <div className="container-fluid movie-app">
       
          <div className="col-md-12">
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
        
        <div className="row">
          <MovieLIst movies={movies} handleFavouriteClick={addFavouriteMovie} favouriteComponent={AddFavourites} />
        </div>
        
        <div className="row d-flex align-items-center mt-4 mb-4">
          <Heading title="Favourites" />
        </div>
            <div className="row">
              <MovieLIst
               movies={favourites} 
               handleFavouriteClick={removeFavouriteMovie} 
               favouriteComponent={RemoveFavourites} />
            </div>

     </div>
    </>
  );
}


export default App
