import React from 'react'
import { db } from './firebase'
import { collection, getDocs} from '@firebase/firestore'
import { useState, useEffect } from 'react'
import './css/rents.css'

function Rents() {
    const Database = collection(db,"Rents")
    const [rent,setRent] = useState([])


    useEffect(()=>{
      const getRents = async ()=>{
        const data = await getDocs(Database)
        setRent(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
      }
      getRents()
    })

  return (
    <div className='main-box'>
      {
        rent.map((data,id)=>(
          <div key={id} className='data'>
            <h1>LOCATION :</h1><p>{data.location}</p>
            <h1>ROOMS :</h1><p>{data.price}</p>
            <h1>ROOMS :</h1><p>{data.rooms}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Rents