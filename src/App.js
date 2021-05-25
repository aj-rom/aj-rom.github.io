import React, { Component } from 'react'
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Navigation from "./components/Navigation";

export default class App extends Component {
    render() {
        return (

            <div className='container-fluid'>
                <Navigation />
                <Jumbotron />
                <Footer />
            </div>
        )
    }
}
