import React from 'react'
import ArtistsList from './ArtistsList'

const ArtistsContainer = () => {
  console.log("Artists Container")
  return(
    <div>
      <div className="top-artists">
        <h2>Your Top Artists</h2>
      </div>
      <center>
        <ArtistsList/>
      </center>
    </div>
  )
}

export default ArtistsContainer
