import React, { useEffect, useState } from 'react'

function Row({title,fetchUrl}) {
    const [movies, setMovies] =useState([]);
    useEffect(()=>{

    },[]);
  return (
    <div>
        {/* tittle */}
        <h2>{title}</h2>

        {/* container -> Posters*/}

    </div>
  )
}

export default Row;