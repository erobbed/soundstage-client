import React from 'react'
import Artist from './Artist'
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'

const ArtistsList = (props) => {
  const artists = props.artists.map((artist, index) => <Artist key={index} artist={artist} />)
  return(
    <Card.Group>
      {artists}
    </Card.Group>
  )
}

function mapStateToProps(state){
  return {artists: state.auth.artists}
}

export default connect(mapStateToProps)(ArtistsList)
