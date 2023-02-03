import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const [detail, setDetail] = useState();
  const { id } = useParams();
  const img_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function getData() {
      const req = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b47bd3b3ce8ace73d363b5afb100feda`);
      setDetail(req.data);
    }
    getData();
  }, [id]);

  return (
    <>
      <div className='flex justify-center my-10 align-middle '>
        <div className='movie detail   w-9/12 flex align-middle '>
          <div className='detail   poster '>
            <img className='w-10/12' src={`${img_url}${detail ? detail.poster_path : ''}`} alt={'poster'} />
          </div>
          <div className=' mt-10 '>
          <h1 className='text-5xl text-white font-bold'>{detail ? detail.original_title : ''}</h1>
          <h1 className='text-md  font-medium mt-4'>Release date: {detail ? detail.release_date : ''}</h1>
          <p className='text-md text-gray-200 font-medium mt-6'>Release date: {detail ? detail.overview : ''}</p>
          </div>
        </div>
      </div>
    </>
  );
}
