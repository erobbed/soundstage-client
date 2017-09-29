import React from 'react';
import { Table } from 'semantic-ui-react';
import { loadConcerts } from '../../actions/artistActions';
import ExplorerRow from './ExplorerRow'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Explore extends React.Component{

  componentDidMount(){
    if (this.props.latlong){
      this.props.loadConcerts(this.props.latlong)
    }
  }

  render(){
    const concerts = this.props.concerts.map((concert, index) => {
      return(
        <ExplorerRow key={index} concert={concert}/>
      )
    })

    return(
      <div style={{maxWidth: '95%', margin: '0 auto'}}>
        <Table style={{background: 'transparent', color: 'white'}}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell style={{width: '200px'}}>Acts</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Time</Table.HeaderCell>
              <Table.HeaderCell style={{width: '200px'}}>Venue</Table.HeaderCell>
              <Table.HeaderCell>City</Table.HeaderCell>
              <Table.HeaderCell style={{width: '200px'}}>State</Table.HeaderCell>
              <Table.HeaderCell style={{width: '100px'}}>Get Tix</Table.HeaderCell>
              <Table.HeaderCell style={{width: '200px'}}>Status</Table.HeaderCell>
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
