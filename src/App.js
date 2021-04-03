import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactPage from './screens/ContactPage';
import HomePage from './screens/HomePage';
import AboutPage from './screens/AboutPage';
import WorkPage from './screens/WorkPage';
import Navbar from './components/NavBar';
import Social from './components/Social';
import MouseStick from './components/MouseStick';

const App = () => {
  return (
    <Router>
      <Navbar />
      <MouseStick />
      <Switch>
        <Route path='/' exact>
          <div id='body'>
            {/* <MouseStick /> */}
            <HomePage />
          </div>
        </Route>
        <Route path='/contact' >
          <div id='body'> 
            {/* <MouseStick /> */}
            <ContactPage />
          </div>
        </Route>
        <Route path='/about' >
          <div id='body'> 
            {/* <MouseStick /> */}
            <AboutPage />
          </div>
        </Route>
        <Route path='/work' >
          <div id='body'>
            {/* <MouseStick />  */}
            <WorkPage />
          </div>
        </Route>
      </Switch>
      <Social />
    </Router>
  )
}

export default App;