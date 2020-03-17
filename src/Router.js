import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Storemain from './Storemain';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { About } from './About';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import CreateProject from './projects/CreateProject';

const Router = () => (
    <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
            
            <Switch>
                <Route exact path='/' component={Storemain} />
                <Route path='/contact' component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/dummy" component={CreateProject} />
                <Route component={NoMatch} />
            </Switch>
        </Layout>
    </React.Fragment>
)




export default Router;