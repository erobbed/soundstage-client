import React from 'react'
import Concert from './Concert'
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'

const ConcertsList = (props) => {
  const concerts = props.concerts.map((concert, index) => <Concert key={index} concert={concert} />)
  return(
    <Card.Group>
      {concerts}
    </Card.Group>
  )
}

function mapStateToProps(state){
  return {concerts: state.concerts.list}
}

export default connect(mapStateToProps)(ConcertsList)
