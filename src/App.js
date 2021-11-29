import ErrorPage from 'Components/404Page/ErrorPage';
import TwoColContactUsWithIllustrationFullForm from 'Components/forms/TwoColContactUsWithIllustrationFullForm';
import NewLogin from 'Components/Login/NewLogin';
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Contact from './Components/Home/Contact/Contact';
import ContactForm from './Components/Home/Contact/ContactForm/ContactForm';
import Home from "./Components/Home/Home";
import Home2 from './Components/Home/Home2';
import Login from "./Components/Login/Login";
import PrivateRoute from './Components/Login/PrivateRoute';
import AllBookingList from './Components/User/Admin/AllBookingList/AllBookingList';
import Book from "./Components/User/General/Book/Book";
import User from "./Components/User/User";

export const UserContext = createContext();


function App() {

  const user = JSON.parse(sessionStorage.getItem('user')) || {};
  //console.log(user);
  const [loggedInUser, setLoggedInUser] = useState(user);
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home2></Home2>
          </Route>
          {/* <Route exact path="/home">
            <Home></Home>
          </Route> */}
          <Route exact path="/home">
            <Home2></Home2>
          </Route>
          {/* <Route path="/login">
            <Login></Login>
          </Route> */}
          <Route path="/login">
            <NewLogin></NewLogin>
          </Route>
          <Route path="/contact">
            <TwoColContactUsWithIllustrationFullForm/>
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
              <ErrorPage />
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;

console.log('Developed BY ___ AHSAN SIUM ==> https://www.linkedin.com/in/ahsan-sium/  <==');
