import React, { Component } from "react";
import "./ListNews.css";
import Card from "../Card/Card";
import data from "../../data.json";
import { v4 as uuidv4 } from "uuid";


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      input: "",
      addCard: false,
      error: false,
    };
  }

  addCard = (card) => {
    this.setState({ cards: [...this.state.cards, card] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let noticia = e.target.elements.noticia.value;

    if (noticia.length > 5) {
      this.addCard({ noticia });
      e.target.reset();
      this.setState({ input: "" });
      this.setState({ addCard: true });
    } else {
      this.setState({ error: true });
    }
  };
    
  renderCards = () =>
    this.state.cards.map((card, i) => (
      <Card data={card} key={uuidv4()} remove={() => this.removeCard(i)} />
    ));
    

  removeAllCards = () => this.setState({ cards: [] });

  removeCard = (key) => {
    let filterCards = this.state.cards.filter((card, i) => key !== i);
    this.setState({ cards: filterCards });
  };

  resetCards = () => {
    this.setState({ cards: data });
  };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({ input: "" });
      event.target.value = "";
    }, 20000);
  };

  mostrarBoton = () => {
    if (this.state.input !== "") {
      return <input type='submit' value='ADD' />;
    } else {
      return "";
    }
  };

  componentDidMount() {
    this.setState({ cards: data });
  }

  mostrarMensaje = () => {
    if (this.state.addCard) {
      setTimeout(() => {
        this.setState({ addCard: false });
      }, 5000);
      return <h2>Noticia añadida</h2>;
    } else {
      return "";
    }
  };

  mostrarError = () => {
    if (this.state.error) {
      setTimeout(() => {
        this.setState({ error: false });
      }, 5000);
      return <h2>La noticia debe de tener 6 caracteres como mínimo</h2>;
    } else {
      return "";
    }
  };

  render() {
    return (
      <div className='List'>
        <div className='wrapper'>
          <form className='formulario' onSubmit={this.handleSubmit}>
            <label htmlFor='news'>Noticias:</label>
            <br />

            <input
              type='text'
              id='news'
              name='news'news
              placeholder='Noticia'
              onChange={this.handleChange}
            />
            <br />
            {this.mostrarBoton()}
          </form>
          {this.mostrarMensaje()}
          {this.mostrarError()}
          <div className='container'>{this.renderCards()}</div><br />
          <button onClick={this.removeAllCards}>Borrar Noticias</button> 
          <button onClick={this.resetCards}>Resetear noticias</button>
        </div>
      </div>
    );
  }
}

export default List;
