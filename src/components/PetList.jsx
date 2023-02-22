import React from 'react'
import { nanoid } from 'nanoid'
import PetCard from './PetCard'

function PetList({ items = [] }) {

  return (
    <>
    <ul>
        {items.map((pet) => (

        <PetCard key={nanoid()} {...pet} />
        
        ))}

    </ul>
    </>
  );
}

export default PetList