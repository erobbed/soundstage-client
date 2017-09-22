import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { getConcerts } from '../actions/concertActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Artist extends React.Component{
  handleClick = () => this.props.getConcerts(this.props.artist)

  render(){
    return (
      <Card className="artist" onClick={this.handleClick}>
        <Image shape="circular" src={this.props.artist.image_url} alt={this.props.artist.name} className="artist"/>
        <Card.Content className="artist">
          <Card.Header className="artist">
            {this.props.artist.name}
          </Card.Header>
        </Card.Content>
      </Card>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getConcerts}, dispatch)
}

export default connect(null, mapDispatchToProps)(Artist)
