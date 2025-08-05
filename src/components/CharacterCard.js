import Image from "next/image"
import Link from "next/link"
const CharacterCard = ({character}) => {

  return (
    <>
    <article className="col-span-3 bg-[#60a85f] rounded-3xl p-3">
        <div className="mb-4" >
        <Image className="rounded-t-xl" src={character.image} width={300} height={300} alt={character.name}/>
    </div>
      <h2 className="text-xl">{character.name}</h2>
        <p>{character.status} </p>
         <p>{character.origin.name} </p>
         <Link className="bg-[#ebe480] flex rounded-2xl p-3 m-3 justify-center hover:bg-[#14B0C5] " href={`character/${character.id}`} > View more </Link>
    </article>
    
    </>
  )
}

export default CharacterCard