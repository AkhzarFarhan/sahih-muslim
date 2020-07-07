import React, { Component } from 'react';
import './sidemenu.css';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
     allButs:[]
   };
  }
  render() {
    return (
      <div id="mySidenav" className="sidenav">

      </div>
    );
  }


}

export default SideMenu;
