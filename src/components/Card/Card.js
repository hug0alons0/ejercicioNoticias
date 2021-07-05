import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    let {noticia} = this.props.data
    return (
      <div className="Card">
        <p>{noticia}</p>
        <button onClick={this.props.remove}>Borrar noticia</button>
      </div>
    );
  }
}

export default Card;