import React from 'react'
import { Menu, Segment, Icon, Button, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { logOut} from '../../actions/authActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LocationForm from './Form';
import {TweenMax } from 'gsap'

class NavBar extends React.Component {
  state = {
    changing: false
  }

  componentDidMount(){
    TweenMax.set(document.querySelector('.location form'), {scaleX: 0})
    TweenMax.set(document.querySelector('i.icon.compass'), {x: '130px'})
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogout = () => {
    this.props.logOut()
    this.props.history.push('/login')
  }

  handleClick = () => {
    if (this.state.changing){
      this.setState({changing: false}, () => {
        TweenMax.to(document.querySelector('i.icon.compass'), .7, {x: '130px'})
        TweenMax.to(document.querySelector('.location form'), .6, {scaleX: 0})
      })
    }
    else {
      this.setState({changing: true}, () => {
        TweenMax.to(document.querySelector('i.icon.compass'), .7, {x: '0px'})
        TweenMax.to(document.querySelector('.location form'), .7, {scaleX: 1})
      })
    }
  }

  render() {
    const { activeItem } = this.state

    return (
    <Segment inverted className="nav">
      <Menu inverted pointing secondary className="main-nav" size="tiny">
        <Menu.Item as={NavLink} to="/" exact name="Home" active={activeItem === 'Home'} onClick={this.handleItemClick} key="home" />
        <Menu.Item as={NavLink} to="/artists" exact name="My Artists" active={activeItem === 'My Artists'} onClick={this.handleItemClick} key="artists" />
        <Menu.Item as={NavLink} to="/concerts" exact name="My Concerts" active={activeItem === 'My Concerts'} onClick={this.handleItemClick} key="concerts" />
        <Menu.Menu position="right" key="right">
          <Menu.Item key='location' className='location'>
            <Button icon inverted size='mini' className='compass' onClick={this.handleClick}><Icon size='large' name='compass'/></Button>
            <LocationForm close={this.close} id='location'/>
          </Menu.Item>
          <Menu.Item key="logout">
            <Button basic inverted secondary color="black" id="logout" onClick={this.handleLogout}>Log Out</Button>
          </Menu.Item>
          <Menu.Item key="bubble">
            <Image avatar src={this.props.user.profile_img_url} alt={this.props.user.username}/>
            <p> {this.props.user.username}</p>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Segment>
    )
  }
}

function mapStateToProps(state){
  return {loggedIn: state.auth.loggedIn, user: state.auth.user}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({logOut}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
