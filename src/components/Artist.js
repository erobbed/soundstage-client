import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { getConcerts } from '../actions/concertActions';
import { connect } from 'react-redux';
import {withRouter } from 'react-router'
import { bindActionCreators } from 'redux';


class Artist extends React.Component{
  handleClick = () => {
    this.props.getConcerts(this.props.artist.name)
    localStorage.setItem('artist', this.props.artist.name)
    this.props.history.replace(`/artists/${this.props.artist.name}/concerts`)
  }

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

export default withRouter(connect(null, mapDispatchToProps)(Artist))
