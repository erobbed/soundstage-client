import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { logOut} from '../actions/authActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import Search from './Search'

class NavBar extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    console.log(this.props)
    const { activeItem } = this.state
    const items = this.props.loggedIn ? [
      <Menu.Item as={NavLink} to="/home" exact name="Home" active={activeItem === 'Home'} onClick={this.handleItemClick} key="home">
        Home
      </Menu.Item>,
      <Menu.Item key="logout">
        <button onClick={this.props.logOut}>Log Out</button>
      </Menu.Item>
    ] : []

    return (
    <Segment inverted>
      <Menu inverted pointing secondary className="main-nav">
        {items}
      </Menu>
    </Segment>
    )
  }
}

function mapStateToProps(state){
  return {loggedIn: state.auth.loggedIn}
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
