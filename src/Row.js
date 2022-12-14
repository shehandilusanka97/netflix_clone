import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Row({title,fetchUrl}) {
    const [movies, setMovies] =useState([]);

    useEffect(()=>{
      async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results)
        return request;
      }
      fetchData();
    },[fetchUrl]);
    console.log(movies);
  return (
    <div>
        {/* tittle */}
        <h2>{title}</h2>

        {/* container -> Posters*/}

    </div>
  )
}

export default Row;