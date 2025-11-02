import React from 'react'
import SearchIcon from '../assets/search.png'

const Search = (props) => {
  return (
    <div className='search' style={{display:"flex", flexDirection:"row", justifyContent:"space-between",gap:"2rem"}}>
        <div className='title'>
            <h1>Movies App</h1>
        </div>
        <div className='search-bar' style={{display:"flex",flexDirection:"row"}}>
            <input 
            type="text" 
            className='form-control' 
            placeholder='Search Movie' 
            value={props.searchValue}
            onChange={(event)=>props.setSearchValue(event.target.value)}
            
            />
            <img src={SearchIcon} alt="search" style={{width:"30px", height:"30px", cursor:"pointer", marginLeft:"10px"}}/>
        </div>
    </div>
  )
}

export default Search