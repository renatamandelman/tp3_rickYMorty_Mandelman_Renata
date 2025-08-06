"use client";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import CharacterGrid from "@/components/CharacterGrid";

const CharactersContainer = () => {
  const BASE_URL = `https://rickandmortyapi.com/api/character`;
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getCharacters = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(BASE_URL);
      setCharacters(response.data.results);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }, [BASE_URL]);

  useEffect(() => {
    getCharacters(); 
  }, [getCharacters]);

  return (
    <div className="flex justify-center items-center flex-col">
    <h1 style={{ fontFamily: 'MiFuente' }} className="text-[#88e23b] text-6xl m-10 uppercase font-MiFuente text-shadow-lg text-shadow-[#c7fa6c]">Characters</h1>
    <CharacterGrid characters={characters}/>
    </div>
  )
}

export default CharactersContainer