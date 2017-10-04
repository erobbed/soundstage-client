import React from 'react';
import { connect } from 'react-redux';
import { geocode } from '../../actions/userActions'
import { bindActionCreators } from 'redux'

class LocationForm extends React.Component{

  state={
    input: ''
  }

  handleChange = (e) => {
    this.setState({input: e.target.value})

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.geocode(this.state.input)
    this.setState({input: ''})
    this.props.close()
  }


  render(){
    return(
      <div style={{display: 'flex'}}>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <input placeholder='Zip Code or City, State' value={this.state.input}/>
          <input type="submit" style={{display: 'none'}}/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({geocode}, dispatch)
}

export default connect(null, mapDispatchToProps)(LocationForm)
