import React from 'react';
import { Table } from 'semantic-ui-react';
import ExplorerRow from './ExplorerRow'
import { connect } from 'react-redux';

class Explore extends React.Component{

  render(){
    const concerts = this.props.concerts.map((concert, index) => {
      return(
        <ExplorerRow key={index} concert={concert}/>
      )
    })
    return(
      <div style={{margin: '0 auto', overflow: 'auto'}}>
        <Table columns={8} inverted striped style={{background: 'transparent', color: 'white'}} className="explore">
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
  return {concerts: state.concerts.list, latlong: state.users.latlong, updates: state.users.updates}
}

export default connect(mapStateToProps)(Explore)
