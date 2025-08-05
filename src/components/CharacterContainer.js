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
    <CharacterGrid characters={characters}/>
  )
}

export default CharactersContainer