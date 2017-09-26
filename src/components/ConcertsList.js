import React from 'react';
import Concert from './Concert';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userConcerts } from '../actions/userActions'
// import Masonry from 'react-masonry-component';

class ConcertsList extends React.Component{

  componentDidMount(){
    const jwt = localStorage.getItem('jwt')
    this.props.userConcerts(jwt)
  }

  render(){
    const upcoming = this.props.concerts.filter((concert, index) => new Date(concert.date) >= Date.now() )
    const past = this.props.concerts.filter((concert, index) => new Date(concert.date) < Date.now())

    const upcomingConcerts = upcoming.map((concert, index) => <Concert key={index} concert={concert} />)
    const pastConcerts = past.map((concert, index) => <Concert key={index} concert={concert} />)

    return(
      <div>
        <div className="top">
          <h2>Your Upcoming Concerts</h2>
        </div>
          <Grid centered columns={4}>
            <Grid.Row>
              {upcomingConcerts === [].length ? <h1>Sorry You Currently Have No Upcoming Concerts</h1> : upcomingConcerts}
            </Grid.Row>
          </Grid>
          <div className="top">
            <h2>Your Past Concerts</h2>
          </div>
          <Grid centered columns={4}>
            <Grid.Row>
              {pastConcerts === [].length ? <h1>Sorry You Currently Have No Past Concerts to Show</h1> : pastConcerts}
            </Grid.Row>
          </Grid>
      </div>
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
