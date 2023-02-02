import React, { useEffect, useState } from 'react';
import axios from '../axios';

const img_uri = 'https://image.tmdb.org/t/p/original/';

export default function Content(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(props.url);
      setMovies(req.data.results);
    }

    fetchData();
  }, [props.url]);

  return (
    <>
      <div className=' flex justify-center my-10 '>
        <div className=' w-10/12 '>
          <h1 className=' text-6xl mb-5 text-white font-bold '>{props.title}</h1>
          <div className='grid grid-cols-4 gap-9 '>
            {movies.map((movie) => {
              return (
                <div className='' key={movie.id}>
                  <img  className=' hover:scale-95 transition-all duration-300' src={`${img_uri}${movie.poster_path}`} alt={movie.name} key={movie.id} />
                  {/* <h3 className='text-lg font-bold text-white' key={movie.id}>
                    {movie.title} {movie.name}
                  </h3>
                  <p key={movie.id}>Release date: {movie.release_date}{movie.first_air_date}</p> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
