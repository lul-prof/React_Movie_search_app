import React from 'react'
import FavIcon from '../assets/fav.png'
const AddFavourites = () => {
  return (
    <>
        <span className='add-favourite d-flex align-items-center justify-content-center'>Add to Favourites
        <img src={FavIcon} alt="add to favourites" style={{width:"40px", height:"40px", cursor:"pointer"}}/>
        </span>
    </>
  )
}

export default AddFavourites