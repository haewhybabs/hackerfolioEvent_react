import React, { Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/header.js';
import Banner from './components/banner.js';
import Home from './components/home.js';
import Footer from './components/footer.js'
import Login from './components/login.js'
import Register from './components/register.js'


class App extends Component {

  constructor(props) {
    super(props)
        this.state={
            
            user:false
        }
  }

  componentDidMount(){
    const user = localStorage.getItem('user') === 'true';

        
  }

  render() {
    return (
      <Router>
        <div className="csi-container">
          <Header/>
          <Banner/>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/Register" component={Register} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
