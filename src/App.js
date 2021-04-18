import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from './Components/Login/PrivateRoute';
import AllBookingList from './Components/User/Admin/AllBookingList/AllBookingList';
import Book from "./Components/User/General/Book/Book";
import User from "./Components/User/User";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <User></User>
          </PrivateRoute>
          <PrivateRoute path="/yachtBooking/:yachtId">
            <User></User>
          </PrivateRoute>
          {/* <PrivateRoute path="/dashboard/bookingList/">
            <AllBookingList></AllBookingList>
          </PrivateRoute> */}
          <Route  path="*">
              <h3>404 Error</h3>
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
