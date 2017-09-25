import React from 'react';
import { Card } from 'semantic-ui-react';
import Img from 'react-image'
// import { bindActionCreators } from 'redux';


class Concert extends React.Component{
  render(){
    console.log(this.props.concert);
    return (
      <Card className="concert">
        <Img src={[this.props.concert.seatmap, 'default.png']} className="image concert" alt="img"/>
        <Card.Content>
          <Card.Header>
            {this.props.concert.venue}
          </Card.Header>
          <Card.Meta>
            {this.props.concert.date} at {this.props.concert.time}
          </Card.Meta>
          <a href={this.props.concert.purchase}>Purchase</a><br/>
        </Card.Content>
      </Card>
    )
  }
}

export default Concert
