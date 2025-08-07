import React from 'react'
import EpisodeItem from './EpisodeItem'

const EpisodeGrid = ({episodes}) => {
  return (
    <div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-[1000px] mx-auto my-2">
       {episodes.map(episode => <EpisodeItem key={episode.id} episode={episode} /> )}
      </div>
    </div>
  )
}

export default EpisodeGrid