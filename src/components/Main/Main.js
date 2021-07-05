import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./Main.css";
import Home from "../Home";
import ListNews from "../ListNews/ListNews";
import Form from "../Form";


class Main extends Component {
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
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/ListNews' component={ListNews} />
          <Route path='/form' component={Form} />
        </Switch>
      </div>
    );
  }
}

export default Main;
