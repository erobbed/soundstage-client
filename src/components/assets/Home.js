import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { allConcerts } from '../../actions/concertActions';
import ViewContainer from '../assets/ViewContainer';


class Home extends React.Component{

  componentDidMount(){
    const jwt = localStorage.getItem('jwt')
    const id = localStorage.getItem('id')
    if (jwt && id) {
      this.props.allConcerts(jwt, id)
    }
  }

  render(){

    return (
      <div>
        <h1 id="title">SoundStage</h1>
        <div className="top">
          <h2>My Artists This Week</h2>
        </div>
        <br/>
        {this.props.loading && this.props.concerts.length === 0 ? null : <ViewContainer/>}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({allConcerts}, dispatch)
}

function mapStateToProps(state) {
  return {concerts: state.concerts.list, loading: state.auth.loading}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
