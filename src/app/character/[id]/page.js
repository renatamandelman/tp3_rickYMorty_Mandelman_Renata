import CharacterInfo from '@/components/CharacterInfo'
import React from 'react'

const page =  ({params}) => {
    const {id} =  params;

  return (
    <CharacterInfo id={id}/>
  )
}

export default page