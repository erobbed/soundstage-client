import React from 'react'
import ArtistsList from './ArtistsList'

const ArtistsContainer = () => {
  return(
    <div>
      <div className="top">
        <h2>Your Top Artists</h2>
      </div>
      <center>
        <ArtistsList/>
      </center>
    </div>
  )
}

export default ArtistsContainer
