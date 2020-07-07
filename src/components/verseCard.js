import React, { Component } from 'react';
import '../css/verseCard.css';

class verseCard extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
   };
  }
  render() {
    return (
      <div  className="verseCard">
        <div className="verseNumber">{this.props.number}</div>
        <div className="verseArabic">{this.props.content_arabic}</div>
        {this.props.content}
        <div className="verseHindi">{this.props.content_hindi}</div>
      </div>
    );
  }


}

export default verseCard;
