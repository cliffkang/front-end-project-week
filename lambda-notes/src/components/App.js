import React, { Component } from "react";
// import logo from "../styling/logo.svg";
import "../styling/App.css";
import MainView from "./MainView";
import CreateView from "./CreateView";
import OneNote from "./OneNote";
import EditView from './EditView';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NotesViewStyled from "../styling/NotesViewStyled";

class App extends Component {
  render() {
    return (
      <Router>
        <NotesViewStyled>
          <div className="LeftBar">
            <h1>Lambda Notes</h1>
            <button>
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none"
                }}
              >
                View Your Notes
              </Link>
            </button>
            <button>
              <Link
                to="/create"
                style={{
                  color: "white",
                  textDecoration: "none"
                }}
              >
                + Create New Note
              </Link>
            </button>
          </div>
          <Route exact path="/" component={MainView} />
          <Route path="/create" component={CreateView} />
          <Route
            path="/note/:id"
            render={props => {
              return <OneNote id={props.match.params.id} />;
            }}
          />
          <Route
            path="/edit/:id"
            render={props => {
              return <EditView id={props.match.params.id} />;
            }}
          />
        </NotesViewStyled>
      </Router>
    );
  }
}

export default App;
