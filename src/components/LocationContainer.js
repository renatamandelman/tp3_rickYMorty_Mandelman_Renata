"use client";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import LocationGrid from "@/components/LocationGrid";
import Loading from "./Loading";

const LocationContainer = () => {
  const BASE_URL = `https://rickandmortyapi.com/api/location`;
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getLocations = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(BASE_URL);
      setLocations(response.data.results);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }, [BASE_URL]);

  useEffect(() => {
    getLocations(); 
  }, [getLocations]);
 return (
   !loading && (
    <div className="flex justify-center items-center flex-col">
    <h1 style={{ fontFamily: 'MiFuente' }} className="text-[#88e23b] text-6xl m-10 uppercase font-MiFuente text-shadow-lg text-shadow-[#c7fa6c]">Episodes</h1>
    <LocationGrid locations={locations}/>
       {loading && <Loading />}

        {error && "Hubo un error"}
    </div>
  
   )
  )
}

export default LocationContainer