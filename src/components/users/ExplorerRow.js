import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import { addConcert, removeConcert, userConcerts } from '../../actions/userActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ExplorerRow extends React.Component{

  componentDidMount(){
    const jwt = localStorage.getItem('jwt')
    this.props.userConcerts(jwt)
  }

  handleAdd = () => {
    const jwt = localStorage.getItem('jwt')
    const id = localStorage.getItem('id')
    this.props.addConcert(jwt, this.props.concert, id)
  }

  handleRemove = () => {
    const jwt = localStorage.getItem('jwt')
    const id = localStorage.getItem('id')
    this.props.removeConcert(jwt, this.props.concert, id)
  }

  render(){
    const concertIds = this.props.list.map(concert => concert.id)
    return(
      <Table.Row>
        <Table.Cell>{this.props.concert.name}</Table.Cell>
        <Table.Cell>{this.props.concert.date}</Table.Cell>
        <Table.Cell>{this.props.concert.time}</Table.Cell>
        <Table.Cell>{this.props.concert.venue}</Table.Cell>
        <Table.Cell>{this.props.concert.city}</Table.Cell>
        <Table.Cell>{this.props.concert.state}</Table.Cell>
        <Table.Cell><a href='{this.props.concert.purchase}' target="_blank">Buy</a></Table.Cell>
        <Table.Cell>{concertIds.includes(this.props.concert.id) ? <Button color='red' onClick={this.handleRemove}>Remove from to My Concerts</Button> : <Button color='violet'  onClick={this.handleAdd}>Add to My Concerts</Button>}</Table.Cell>
      </Table.Row>
    )
  }
}

function mapStateToProps(state){
  return {list: state.users.userConcerts}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({userConcerts, addConcert, removeConcert}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ExplorerRow)
