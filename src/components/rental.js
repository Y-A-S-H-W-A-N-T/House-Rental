import React from 'react'
import { db, storage } from './firebase'
import { collection, addDoc } from '@firebase/firestore'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { uploadBytes, ref, getDownloadURL } from "firebase/storage"

function Rental() {
    const [owner,setOwner] = useState('')
    const [location,setLocation] = useState('')
    const [price,setPrice] = useState('')
    const [rooms,setRooms] = useState('')
    const [images,setImages] = useState()
    const [url,setUrl] = useState('')

    const Database = collection(db,"Rents")
    const navigation = useNavigate()


    const addRents = async (e)=>{
      e.preventDefault()
      if(location==="" || price==="" || rooms==="" || url==='' || owner==='')
      {
          alert("Enter Details")
          return
      }
      await addDoc(Database, {owner: owner,location: location,price : price,rooms: rooms, url_link: url})
      navigation("/")
    }

    const UploadImage = ()=>{
        if(!images)
        {
          alert("ADD IMAGE")
          return false
        }
        const Img_ref = ref(storage,`Rents/${owner}/${owner+location}`)
        uploadBytes(Img_ref,images)
        .then((res)=>{
            getDownloadURL(res.ref)
            .then((link)=>{
              setUrl(link)
            })
        })
    }

  return (
    <div>
      <div className='add'>
        <input 
          placeholder='Owner'
          value={owner}
          onChange={(e)=>setOwner(e.target.value)}
          required
        />
        <input 
          placeholder='Location'
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
          required
        />
        <input 
          placeholder='Price'
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
          required
        />
        <input 
          placeholder='Rooms'
          value={rooms}
          onChange={(e)=>setRooms(e.target.value)}
          required
        />
        <input
          type='file'
          onChange={(e)=>setImages(e.target.files[0])}
          required
        />
        <button onClick={UploadImage}>ADD IMAGE</button>
        <p>url : {url}</p>
        <p>LOCATION : {location}</p>
        <p>PRICE : {price}</p>
        <p>ROOMS : {rooms}</p>

        <button onClick={addRents}>ADD RENT</button>
      </div>
    </div>
  )
}

export default Rental