import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default class Artist extends React.Component{

  render(){
    return (
      <Card className="artist">
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
