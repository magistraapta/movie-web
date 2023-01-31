import React, { useEffect, useState } from 'react';
import axios from '../axios';

const img_uri = 'https://image.tmdb.org/t/p/original/';

export default function Content(props) {
  const [movies, setMovies] = useState([]);
  console.log(props);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(props.url);
      setMovies(req.data.results);
    }

    fetchData();
  }, [props.url]);
  console.log(movies);
  return (
    <>
      <div className=' flex justify-center my-5 '>
        <div className=' w-9/12 '>
          <h1 className='text-5xl ml-5 text-zinc-200 font-bold lg:text-3xl sm:text-xl'>{props.title}</h1>
          <div className='flex mt-5 overflow-x-scroll overflow-y-hidden  whitespace-no-wrap'>
          {movies.map((movie) => {
            return <img className=' px-5 w-4/12 hover:scale-110 transition-all duration-300' src={`${img_uri}${movie.poster_path}`} alt={movie.name} key={movie.id} />
            ;
          })}
          </div>
        </div>
      </div>
    </>
  );
}
