import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import "./App.css";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/addcontact";
import EditContact from "./components/contacts/editcontact";
import Header from "./components/layout/Header";
import About from "./components/pages/about";
// import CostumModel from "./components/c/CustomModal";
import { Provider } from "./components/Context"

class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Header />
            {/* <AddContact />
           <CostumModel></CostumModel> }
            <Contacts /> */}
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/addcontact" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
// render(<App />, document.getElementById('root'));

export default App;
