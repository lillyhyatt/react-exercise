import React from 'react'

function PetCard( {name, photo} ) {

  return (

    <div style={{ border: '3px solid', borderRadius: '2em', boxShadow: '0px 0px 5px #fff', margin: '1em' }}>

<h2>{name}</h2>

 <img src={`${photo}`} style={{  height: '300px', width: '300px', borderRadius: '50%', padding: '1em' }} /> 


    </div>

  )
  
}

export default PetCard
