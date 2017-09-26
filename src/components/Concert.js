import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addConcert, removeConcert } from '../actions/userActions';
import { bindActionCreators } from 'redux';
import Img from 'react-image';


class Concert extends React.Component{

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
    return (
      <Card className="concert">
        <Img src={[this.props.concert.seatmap, '/default.png']} className="image concert" alt="img"/>
        <Card.Content className="concert">
          <Card.Header>
            {this.props.concert.venue}
          </Card.Header>
          <Card.Meta>
            {this.props.concert.date} at {this.props.concert.time}
          </Card.Meta>
          <a href={this.props.concert.purchase}>Purchase</a><br/>
        </Card.Content>
        {concertIds.includes(this.props.concert.id) ? <Button onClick={this.handleRemove}>Remove from to My Concerts</Button> : <Button onClick={this.handleAdd}>Add to My Concerts</Button>}

      </Card>
    )
  }
}

function mapStateToProps(state){
  return {list: state.users.userConcerts}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addConcert, removeConcert}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Concert)
