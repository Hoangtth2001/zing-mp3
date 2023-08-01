import React, {useEffect} from 'react'
import { Header } from '../../components'
import { apis } from '../../apis'

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
  useEffect(() => {
    const fetchDataHome = async () => { 
      const response = await apis.getHome()
      console.log(response)
     }
     fetchDataHome()

  },[]) 
  return (
    <div className='overflow-y-auto '>
      <div className='h-[70px] px-[20px] flex items-center'>
        <Header />
      </div>
    </div>
  )
}

export default Home