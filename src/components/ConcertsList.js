import React from 'react';
import Concert from './Concert';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userConcerts } from '../actions/userActions'

class ConcertsList extends React.Component{

  componentDidMount(){
    const jwt = localStorage.getItem('jwt')
    this.props.userConcerts(jwt)
  }

  render(){
    const concerts = this.props.concerts.map((concert, index) => <Concert key={index} concert={concert} />)
    return(
      <Card.Group>
        {concerts.length === [].length ? <h1>Sorry You Currently Have No Concerts to Show</h1> : concerts}
      </Card.Group>
    )
  }
}

function mapStateToProps(state){
  return {concerts: state.users.userConcerts}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({userConcerts}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ConcertsList)
