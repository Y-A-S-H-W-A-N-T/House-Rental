import React from 'react'
import { db } from './firebase'
import { collection, getDocs} from '@firebase/firestore'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Display from './display'
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
      <section class="heropage">
        <img src="hero1.jpg" alt="heropage##" height="440px" />
        <div id="heropagetext">
          <h1><em>RoamReserve</em> Where Every Stay Tells a Story!</h1>
          <p>
            Whether you're embarking on an adventure, planning a business trip, or
            seeking a relaxing getaway, our mission is to help you find your ideal
            stay effortlessly.
          </p>
          <h4>Explore. Book. Roam.</h4>
        </div>
      </section>
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