import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Header extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <ul className='Nav'>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/ListNews'>Noticias</Link>
        </li>
        <li>
          <Link to='/Form'>Formulario</Link>
        </li>
      </ul>
    );
  }
}

export default Header;