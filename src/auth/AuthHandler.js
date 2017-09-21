import React from 'react';
import { authorize } from '../actions/authActions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class AuthHandler extends React.Component{
  componentWillMount(){
    console.log("handling auth");
    const code = this.props.location.search.split("=")[1]
    this.props.authorize(code).then(this.props.history.push('/'))
  }

  render(){
    return (
      <div></div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({authorize}, dispatch)
}

export default connect(null, mapDispatchToProps)(AuthHandler)
