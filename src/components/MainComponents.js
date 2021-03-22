import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponents';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

    render() {

        const HomePage = () => {
            return(
                <Home />
            );
        }

        const AboutUs = () => {
            return(
                <About />
            );
        }


        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/about' component={AboutUs} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }

}

export default Main;