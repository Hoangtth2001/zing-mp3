import React from 'react'
import { Header , Slider } from '../../components'


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
    <div className='overflow-y-auto '>
      <div className='h-[70px] px-[20px] flex items-center'>
        <Header />
      </div>
        <Slider/>
    </div>
  )
}

export default Home