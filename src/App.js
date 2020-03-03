import React, { Component } from 'react';
import AppNavbar from './components/AppNavBar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { HashRouter, Route ,Redirect} from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import './css/fontawesome.css';
// import './css/solid.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <AppNavbar />
            <Route exact path= "/" render={()=>(<Redirect to="/portfolio/home"/>)}/>
            <Route path= "/portfolio/home" render={props => <Home key={Date.now()} {...props} />} />
            <Route path= "/portfolio/about" render={props => <About key={Date.now()} {...props} />} />
            <Route path= "/portfolio/work" render={props => <Work key={Date.now()} {...props} />} />
            <Route path= "/portfolio/contact" render={props => <Contact key={Date.now()} {...props} />} />
            <Footer />
          </div>
        </HashRouter>

      </div>
    );
  }
}

export default App;
