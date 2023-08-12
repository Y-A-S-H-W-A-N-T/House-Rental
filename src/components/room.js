import React from 'react'
import { db } from './firebase'
import { useState, useEffect } from 'react'
import { getDoc, doc} from '@firebase/firestore'
import './css/display.css'
import { useParams } from 'react-router-dom'

function Display() {
    const id = useParams()
    const [rent,setRent] = useState('')

    // Fetching Rent Location | Price | Rooms
    const doc_ref = doc(db,"Rents",id.id)
    useEffect(()=>{
        getDoc(doc_ref).then((res)=>{
            setRent(res.data())
        })
    },[])
    console.log(rent)

  return (
    <div className='images'> 
        <h1>OWNER : {rent.owner}</h1>
        <h1>LOCATION : {rent.location}</h1>
        <h1>PRICE : {rent.price}</h1>
        <h1>ROOMS : {rent.rooms}</h1>
        <img src={rent.url_link} />
    </div>
  )
}

export default Display