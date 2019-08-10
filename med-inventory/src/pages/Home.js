import React, { Component } from 'react';
import NavBar from "../layout/NavBar"

class Home extends Component {
  
  render() {
    const {
      user,
      signOut,
    } = this.props;

    return (
      <div>
          <NavBar user={user} signOut={signOut}/>
      </div>
    );
  }
}

export default Home;
