import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import { Jumbotron } from './components/Jumbotron';
import { Layout } from './components/Layout';
import Login from './components/auth/Login';
import cart from './components/cartRedux/components/cart';

class App extends Component {
  render() {
    const { auth } = this.props;

    // if auth is loaded then we render App.
    // But if not then we doesn't render the one.
    if (auth.isLoaded) {
      return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Jumbotron />
            <Layout>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/project/:id" component={ProjectDetails} />
              <Route path="/signin" component={Login}/>
              <Route path="/signinadm" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/prxcr" component={CreateProject} />
              <Route path="/cart" component={cart}/>
              <Route path="/:any" component={Dashboard} />
            </Switch>
            </Layout>
          </div>
          
        </BrowserRouter>
      );
    }

    return null;
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps),
)(App);
