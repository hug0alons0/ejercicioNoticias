import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Form";

class Form extends Component {
  constructor(props){
  super(props);
  this.state = {};
  }

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
        <h1>Formulario de Nueva Noticia</h1>
        <label>Título de la Noticia:</label><br />
        <input type="text" placeholder="Título" /><br />
        <label>Redactar Noticia:</label><br />
        <textarea type="text" placeholder="Redacte Noticia" /><br />
        
          <Link to='/ListNews'><button>Enviar</button></Link>
                {/* Funciona al envolver el button en el "link to" y no al revés */}
      </div>
    );
  }
}
export default Form;