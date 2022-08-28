import React, { useState } from 'react'

function Row({title}) {
    const [movies, setMovies] =useState([]);
  return (
    <div>
        {/* tittle */}
        <h2>{title}</h2>

        {/* container -> Posters*/}

    </div>
  )
}

export default Row;