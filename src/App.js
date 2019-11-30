import React from 'react';
import './App.css';

/* L import des pages*/
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";

/* L import de react router dom*/
import {Route, Switch } from "react-router-dom";

/* L import des components  */
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms" component={Rooms}/>
        <Route exact path="/rooms/:slug" component={SingleRoom}/> {/* le slug est une variable qui permet d'appler des pages specifique en fonction de la catagorie de la chambre */}
        <Route component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
