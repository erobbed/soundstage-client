import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { logOut} from '../../actions/authActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Image } from 'semantic-ui-react'
// import Search from './Search'

class NavBar extends React.Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogout = () => {
    this.props.logOut()
    this.props.history.push('/login')
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


/* <Menu.Item as={NavLink} to="/search" exact name="Search" active={activeItem === 'Search'} onClick={this.handleItemClick}
>
  Search
</Menu.Item>

<Menu.Item style={{width: 298.95}} className="search">
<Route exact path="/Search" render={() => <Search searchTerm={this.props.searchTerm} fetchMovies={this.props.fetchMovies} handleSelect={this.props.handleSelect} handleChange={this.props.handleChange} />} />
</Menu.Item> */
