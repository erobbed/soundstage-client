import React from 'react';
import { connect } from 'react-redux';
import ViewContainer from '../assets/ViewContainer';


class Home extends React.Component{

  render(){
    return (
      <div>
        <h1 id="title">SoundStage</h1>
        <div className="top">
          <h2>My Artists This Week</h2>
        </div>
        <br/>
        {this.props.loading && (this.props.concerts.length === 0) && !!this.props.latlong ? null : <ViewContainer/>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {concerts: state.concerts.list, clicked: state.concerts.clicked, loading: state.auth.loading, latlong: state.users.latlong}
}

export default connect(mapStateToProps)(Home)
