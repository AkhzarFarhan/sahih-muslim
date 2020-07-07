import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SidemMenu from './sidemenu.js'
import VerseCard from './components/verseCard.js'
class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
     allButs:[],
     status:1,
     firstLoad:1
   };
  }  
  render() {
    return (
      <div className="App">
            <div className="menuBarContainer" onClick={this.handleOnClick}>
                <div className="menubar"></div>
                <div className="menubar"></div>
                <div className="menubar"></div>
            </div>
            {
              this.state.status?
              this.state.allButs
              :
              ""
            }
            {
              !this.state.status?
              <div className="loading"> <div className="loader"></div> </div>
              :
              ""
            }
            {
              this.state.firstLoad?
              <div className="homePage">
                <p className="arabic">أعوذُ بِٱللَّهِ مِنَ ٱلشَّيۡطَٰنِ ٱلرَّجِيمِ </p>
                <p className="english">a’udhu billahi min ash-shaytaan-ir-rajeem</p>
                <p className="meaning">(I seek protection in Allah from the accursed satan)</p>
                <p className="arabic">بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</p>
                <p className="english">bi-smi llāhi r-raḥmāni r-raḥīm</p>
                <p className="meaning">(In the name of Allah, the Most Gracious, the Most Merciful)</p>                
              </div>
              :
              ""
            }
            {
              this.state.firstLoad?
                <div className="language">
                <br></br><br></br><br></br><br></br>
                  <div className="languageEnglish" onClick={this.handleOnClick}>Read</div><br></br>
                </div>
                :
                ""              
            }
            {
              this.state.firstLoad?
              <div className="footer">
                <p>English Translation: Saheeh International<br></br>Hindi Translation: Suhel Farooq Khan and Saifur Rahman Nadwi<br></br>
                  <br></br>Developer: Akhzar Farhan
                </p>
              </div>
              :
              ""
            }
            <SidemMenu handleClick={this.fetchData}/>
            {/*<SidemMenu handleClick={this.fetchDataHindi}/>*/}
      </div>
    );
  }
  handleOnClick(){
     document.getElementById("mySidenav").style.width = "250px";
  }
  componentDidMount(){

  }
  // hindiOnClick(){
  //   document.getElementById("mySidenavHindi").style.width = "250px";
  // }
  fetchData = (i)=>{
        document.getElementById("mySidenav").style.width = "0px";
        this.setState({status:0, firstLoad:0})
        fetch('https://alquran-1234.firebaseio.com/'+i+'.json')
        .then(response => response.json())
         .then(arrayOfUsers => {
              // console.log(arrayOfUsers);
              this.handleRender(arrayOfUsers)
         })
        .catch(function(err){
          console.log(err)
        })     
  }
  handleRender = (foo)=>{
      let bar = []
      // console.log(foo)
      foo.forEach((e,i)=>{
        if(i==0){
          bar.push(<div className="surahName">{e.surah_number}: {e.surah_name_english}</div>)
        }
        bar.push(
          <VerseCard number={e.verse_number} content_arabic = {e.verse_arabic} content= {e.verse_english} content_hindi = {e.verse_hindi}/>
          )          

      })
      bar.push(<br></br>)
      this.setState({allButs: bar},()=>{
        this.setState({status:1})
      })
  }

  // fetchDataHindi = (i)=>{
  //   document.getElementById("mySidenavHindi").style.width = "0px";
  //   this.setState({status:0, firstLoad:0})
  //   fetch('URL')
  //   .then(response => response.json())
  //   .then(arrayOfUsers => {
  //     this.handleRenderHindi(arrayOfUsers)
  //   })
  //   .catch(function(err){
  //     console.log(err)
  //   })
  // }
}

export default App;
