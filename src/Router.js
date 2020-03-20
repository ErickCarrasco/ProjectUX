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
import SignIn from './auth/signIn';
import SignUp from './auth/signUp'
import Dashboard from './boards/dashboard'
import ProductDetails from './projects/ProductDetails'

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
                <Route path="/signin" component = {SignIn}/>
                <Route path="/signup" component = {SignUp}/>
                <Route path="/mainmenu" component={Dashboard}/>
                <Route path='/product/:id' component={ProductDetails} />
                <Route component={NoMatch} />
                
            </Switch>
        </Layout>
    </React.Fragment>
)




export default Router;