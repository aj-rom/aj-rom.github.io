import React, { Component } from 'react'
import Footer from "./components/Footer";
import Body from "./components/Jumbotron";

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Body />
                <Footer />
            </div>
        )
    }
}
