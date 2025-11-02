import React from 'react'
import Search from './Search'
import AddFavourites from './AddFavourites'

const MovieLIst = (props) => {
    const FavouriteComponent=props.favouriteComponent;
  return (
    <div>
        {props.movies.map((movie,index)=>
        <div className="image-container d-flex justify-content-start m-3">
            <img src={movie.Poster} alt={movie.Title} />
            <div onClick={()=>props.handleFavouriteClick(movie)} className='overlay d-flex align-items-center justify-content-center'>
                <FavouriteComponent />
            </div>
        </div>

            )}
    </div>
  )
}

export default MovieLIst