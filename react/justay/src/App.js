import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Hostel from './components/pages/Hostel';
import Rooms from './components/pages/Rooms';
import Mess from './components/pages/Mess';

 
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/Hostel' component={Hostel} />
        <Route path='/Rooms' component={Rooms} />
        <Route path='/Mess' component={Mess} />
      </Switch>
    </Router>
  );
}

export default App;
