"use client";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const CharacterInfo = ({ id }) => {
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const api_key = `https://rickandmortyapi.com/api/character/`;
    const getCharacter = async () => {
      try {
        const response = await axios.get(`${api_key}${id}`);
        setCharacter(response.data);
      } catch (error) {
        console.log("Error fetching Character:", error);
        setError(true);
      }
    };
    getCharacter();
  }, [id]);
  if (!character) {
    return <p className="text-center">Cargando personaje...</p>;
  }

  return (
    !loading && (
    <>
      <div className=" flex justify-center items-center min-h-screen">
        <div className="max-w-[600px] bg-[#69ad53] rounded-3xl p-3 flex flex-col md:flex-row gap-3 items-center text-[#fcf4a8]">
          <div className="mb-4 flex justify-center items-center">
            <Image
              className="rounded-xl"
              src={character.image}
              width={200}
              height={200}
              alt={character.name}
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-5">{character.name}</h2>
           <div className="flex mb-2">
             <svg width={24}
                height={24} aria-hidden="true" data-prefix="fal" data-icon="battery-full" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-battery-full fa-w-20 fa-7x"><path fill="currentColor" d="M560 128c8.823 0 16 7.177 16 16v48h32v128h-32v48c0 8.823-7.177 16-16 16H48c-8.823 0-16-7.177-16-16V144c0-8.823 7.177-16 16-16h512m0-32H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48zM128 314V198a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v116a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6zm64 0V198a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v116a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6zm64 0V198a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v116a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6zm64 0V198a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v116a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6zm64 0V198a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v116a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6zm64 0V198a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v116a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6zm64 0V198a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v116a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6z" class=""></path></svg>
                <p className="ml-1 text-md">{character.status} </p>
            </div>
            <div className="flex mb-2">
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
              <div className="flex mb-2 ">
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
              <p className="ml-1 text-md">{character.location.name} </p>
            </div>
              <div className="flex mt-2">
                <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 16 16"
            >
              <g fill="currentColor">
                <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1m2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848z"></path>
                <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5z"></path>
              </g>
            </svg>
              <p className="ml-1 text-md">Episodes: {character.episode.length} </p>
            </div>
          </div>
        </div>
      </div>
         {loading && <Loading />}

        {error && "Hubo un error"}
    </>
    )
  );
};

export default CharacterInfo;
