import React from 'react'
import { db } from './firebase'
import { collection, addDoc } from '@firebase/firestore'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Rental() {
    const [location,setLocation] = useState('')
    const [price,setPrice] = useState('')
    const [rooms,setRooms] = useState('')
    const Database = collection(db,"Rents")
    const navigation = useNavigate()
    const addRents = async (e)=>{
      e.preventDefault()
      if(location==="" || price==="" || rooms==="")
        {
          alert("Enter Details")
          return
      }
      await addDoc(Database, {location: location,price : price,rooms: rooms})
      navigation("/")
    }
  return (
    <div>
      <div className='add'>
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
        <button onClick={addRents}>ADD NEWS</button>
      </div>
    </div>
  )
}

export default Rental