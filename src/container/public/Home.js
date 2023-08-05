import React from 'react'
import { Header, SliderBar } from '../../components'


// const url =  "https://zing-mp3-5d0e8-default-rtdb.firebaseio.com/.json?auth=e8wUUH7JcVi1x8waP3RiQGaYgMFIFmQQOTbJlnt0";

// fetch(url)
//   .then(res => {
//     return res.json();
//   })
//   .then(data => {
//     console.log( data);
//   })
//   .catch(err => {
//     console.error(err);
//   })


const Home = () => {

  return (
    <div className='overflow-y-auto w-full'>
      <div className=' h-[70px] px-[20px] flex items-center'>
        <Header />
      </div>
      <div className='relative '>
        <SliderBar />
      </div>
    </div>
  )
}

export default Home