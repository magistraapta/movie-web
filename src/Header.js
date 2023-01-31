import React from 'react';
export default function Header() {
  return (
    <>
      <div className='hero xl:h-96 md:h-60' style={{ backgroundImage: `url("https://api.duniagames.co.id/api/content/upload/file/14936393181673511233.jpg")` }}>
        <div className='hero-overlay bg-opacity-40'></div>
        <div className='hero-content text-center text-gray-200'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'>Layar laptop 21</h1>
            <p className='mb-5'>Jelajahi dunia film yang penuh dengan keajaiban dan kehebohan, bersama kita menemukan petualangan baru setiap harinya.</p>
            
          </div>
        </div>
      </div>
      {/* <div className=' flex justify-center'>
        <div className=' rounded-lg mt-10 bg-zinc-200 shadow-xl w-9/12'>
          <div className='card-body text-purple-600'>
            <h2 className=' text-4xl text-center  font-bold'>Welcome</h2>
            <p className='text-center text-2xl'>Layar Film 21</p>
          </div>
        </div>
      </div>

      <div className='form-control mt-10'>
        <div className='input-group flex justify-center '>
          <input type='text' placeholder='Search…' className=' text-purple-500 input bg-zinc-200 w-5/12' />
          <button className='btn btn-square'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 ' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
          </button>
        </div>
      </div> */}
    </>
  );
}
