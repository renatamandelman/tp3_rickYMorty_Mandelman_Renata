"use client";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import EpisodeGrid from "@/components/EpisodeGrid";
import Loading from "./Loading";

const EpisodesContainer = () => {
  const BASE_URL = `https://rickandmortyapi.com/api/episode`;
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getEpisodes = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(BASE_URL);
      setEpisodes(response.data.results);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }, [BASE_URL]);

  useEffect(() => {
    getEpisodes(); 
  }, [getEpisodes]);

  return (
    !loading && (
    <div className="flex justify-center items-center flex-col">
    <h1 style={{ fontFamily: 'MiFuente' }} className="text-[#88e23b] text-6xl m-10 uppercase font-MiFuente text-shadow-lg text-shadow-[#c7fa6c]">Episodes</h1>
    <EpisodeGrid episodes={episodes}/>
       {loading && <Loading/>}

        {error && "Hubo un error"}
    </div>
  )
)
}

export default EpisodesContainer