import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home";

class Home extends Component {
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
      <div>
        <h1>WELCOME</h1>
        <label>User:</label><br />
        <input type="text" placeholder="Introduzca Usuario" /><br />
        <label>Password:</label><br />
        <input type="text" placeholder="Introduzca Contraseña" /><br />
        
          <Link to='/ListNews'><button>Enviar</button></Link>
        
      </div>
    );
  }
}

export default Home;