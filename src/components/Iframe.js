import React from 'react'

class Iframe extends React.Component{

  constructor(){
    super()

    this.state={
      errored: false
    }
  }

  revert = () => {
    this.setState({errored: true})
  }

  render(){
    
    return(
      <div>
        {this.state.errored ? null : <iframe title="concert" src={this.props.concert.purchase} onError={this.revert}></iframe> }
      </div>
    )
  }
}

export default Iframe
