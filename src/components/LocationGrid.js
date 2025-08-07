import React from 'react'
import LocationCard from './LocationCard'

const LocationGrid = ({locations}) => {
  return (
 <div>
         <div className="grid grid-cols-12  gap-3 max-w-[800px] mx-auto my-2">
       {locations.map(location => <LocationCard key={location.id} location={location} /> )}
      </div>
    </div>  
    )
}

export default LocationGrid