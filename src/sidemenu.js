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
      <div>
        <div id="mySidenav" className="sidenav">
          <div className="sidenav-button" onClick={this.handleClose}>Close [X]</div>
          {
            this.state.allButs.map((e,i)=>{
                return(
                    <div  className="sidenav-button" onClick={(e)=>this.props.handleClick(i)}> {e.surahNumber} : {e.surahName}</div>
                )
            })
          }
        </div>

       {/* <div id="mySidenavHindi" className="sidenav">
          <div className="sidenav-button" onClick={this.handleClose}>X</div>
          {
            this.state.allButs.map((e,i)=>{
                return(
                    <div  className="sidenav-button" onClick={(e)=>this.props.handleClick(i)}> {e.surahNumber} : {e.surahName}</div>
                )
            })
          }          
        </div>*/}
      </div>
    );
  }
  handleClose(){
     document.getElementById("mySidenav").style.width = "0px";
     // document.getElementById("mySidenavHindi").style.width = "0px";

  }
  componentDidMount(){
        fetch('https://alquran-1234.firebaseio.com/114.json')
        .then(response => response.json())
         .then(arrayOfUsers => {
              // console.log(arrayOfUse1rs);
              this.setState({
                allButs:arrayOfUsers
              })
              // rendersecondHTML(arrayOfUsers)
         })
        .catch(function(err){
          console.log(err)
        }) 
  }
}

export default SideMenu;
