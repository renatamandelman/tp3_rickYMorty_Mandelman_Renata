import Image from "next/image";
import Link from "next/link";
const CharacterCard = ({ character }) => {
  return (
    <>
      <article className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 w-full max-w-[200px] mx-auto bg-[#69ad53] h-[370px] rounded-3xl p-3 flex flex-col items-end justify-between text-[#fcf4a8]">
      <div>  <div className="mb-4 flex justify-center">
          <Image
            className="rounded-xl"
            src={character.image}
            width={200}
            height={200}
            alt={character.name}
          />
        </div>
        
          <h2 className="text-xl">{character.name}</h2>
          <p>{character.status} </p>
          <div className="flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M6 4.71c.78.711 2.388 2.653 2.575 4.737c.125 1.395.82 2.603 1.925 3.184c.439.23.942.363 1.5.369c.755.008 1.518-.537 1.516-1.292c0-.233-.039-.472-.099-.692A1.4 1.4 0 0 1 13.5 10c.61-1.257 1.81-1.595 2.76-2.278c.421-.303.806-.623.975-.88c.469-.71.937-2.131.703-2.842"></path>
                <path
                  strokeLinecap="round"
                  d="M22 13c-.33.931-.562 3.375-4.282 3.414c0 0-.793 0-1.718.22m-2.563 1.642c-.791 1.49-.33 3.103 0 3.724"
                ></path>
                <path
                  strokeLinecap="round"
                  d="M7 20.662A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5"
                ></path>
              </g>
            </svg>
            <p className="ml-1 text-md">{character.origin.name} </p>
          </div>
        </div>
        <Link
          className="bg-[#c7fa6c] rounded-2xl w-fit p-3  text-[#69ad53]"
          href={`character/${character.id}`}
        >
          <svg  width={20}
              height={20} aria-hidden="true" data-prefix="far" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="svg-inline--fa fa-plus fa-w-12 fa-7x"><path fill="currentColor" d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" class=""></path></svg>
        </Link>
      </article>
    </>
  );
};

export default CharacterCard;
