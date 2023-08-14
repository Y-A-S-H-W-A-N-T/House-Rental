import React from 'react'
// import { storage } from './firebase'
// import { useState, useEffect } from 'react'
// import { ref, listAll, getDownloadURL } from "firebase/storage"
import './css/display.css'

function Display({ prop, id }) {
    // const [pics,setPics] = useState([])

    // const imageList = ref(storage,"Rents/Hyd/")


    // useEffect(()=>{
    //     listAll(imageList)
    //     .then((response) => {
    //         response.items.forEach((item)=>{
    //             getDownloadURL(item)
    //             .then((url)=>{
    //                 setPics((prev)=>[...prev,url])
    //             })
    //         })
    //     })
    // },[imageList])
    // console.log(pics)

  return (
    <div className='images'>
      <div key={id} className='data'>
        <h1>LOCATION :</h1><p>{prop.location}</p>
        <h1>PRICE :</h1><p>{prop.price}</p>
        <h1>ROOMS :</h1><p>{prop.rooms}</p>
      </div>
    </div>
  )
}

export default Display