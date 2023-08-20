import React from 'react'

function Display({ prop, id }) {

  return (
      <div key={id}>
        <img src={prop.url_link} />
      </div>
  )
}

export default Display