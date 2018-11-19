import React, { Component } from 'react';
import NavBar from './Navbar';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './components/home';
import one from '../src/components/one';
import NotFound from './components/notFound';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './styles/style.css';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                <NavBar />
                <main className="container">
                    <Switch>
                        <Route path="/home" render={props => <Home />} />
                        <Route path="/one" component={one} />
                        <Route path="/not-found" component={NotFound} />
                        <Redirect from="/" exact to="/home" />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
