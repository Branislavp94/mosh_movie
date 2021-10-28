import React, { Component } from "react";
import Movies from "./components/movies";
import { Switch, Route, Redirect } from "react-router-dom";
import Customers from "./components/Customers";
import Rentail from "./components/Rentail";
import NotFound from "./components/NotFound";
import "./App.css";
import Navbar from "./components/Navbar";
import FormMovie from "./components/FormMovie";

class App extends Component {
   render() {
      return (
         <React.Fragment>
            <Navbar />
            <div className="container p-5">
               <Switch>
                  <Route path="/movies/:id" component={FormMovie}></Route>
                  <Route path="/movies" component={Movies}></Route>
                  <Route path="/customers" component={Customers}></Route>
                  <Route path="/rentail" component={Rentail}></Route>
                  <Route path="/not-found" component={NotFound}></Route>
                  <Redirect from="/" to="/movies" exact />
                  <Redirect to="/not-found" />
               </Switch>
            </div>
         </React.Fragment>
      );
   }
}

export default App;
