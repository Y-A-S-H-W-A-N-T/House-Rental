import React from 'react'
import { db } from './firebase'
import { collection, getDocs} from '@firebase/firestore'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './css/rents.css'
import Display from './display'

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
          <Link to={`/room/${data.id}`}>
              <Display prop={data} id={id}/>
          </Link>
        ))
      }
    </div>
  )
}

export default Rents