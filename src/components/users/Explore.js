import React from 'react';
import { Table } from 'semantic-ui-react';
import { loadConcerts } from '../../actions/artistActions';
import ExplorerRow from './ExplorerRow'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Explore extends React.Component{

  componentDidMount(){
    const jwt = localStorage.getItem('jwt')
    if (this.props.latlong && jwt){
      this.props.loadConcerts(this.props.latlong, jwt)
    }
  }

  render(){
    const concerts = this.props.concerts.map((concert, index) => {
      return(
        <ExplorerRow key={index} concert={concert}/>
      )
    })

    return(
      <div style={{margin: '0 auto', overflow: 'auto'}}>
        <Table columns={8} inverted striped mini style={{background: 'transparent', color: 'white'}} className="explore">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Acts</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Time</Table.HeaderCell>
              <Table.HeaderCell>Venue</Table.HeaderCell>
              <Table.HeaderCell>City</Table.HeaderCell>
              <Table.HeaderCell>State</Table.HeaderCell>
              <Table.HeaderCell>Get Tix</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {concerts}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {concerts: state.artists.concerts, latlong: state.users.latlong}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({loadConcerts}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore)
