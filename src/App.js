import React from "react";
import "./css/App.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navExpanded: false,
    };
  }

  toggleNav() {
    this.state.navExpanded = !this.state.navExpanded;
  }

  render() {
    return (
      <div className="App">
        <AppNavbar />
      </div>
    );
  }
}

export default App;
