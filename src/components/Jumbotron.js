import React, { Component } from 'react'

export default class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Welcome!</h1>
                <p className="lead">This page is still a work in progress... bare with me while I build this out to be an awesome portfolio!</p>
                <p>We will be up and running in no time.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-md" href="https://github.com/aj-rom" role="button">My GitHub</a>
                    <a className="btn btn-primary btn-md" href="https://linkedin.com/aj-romaniello" role="button">Linked In</a>
                </p>
            </div>
        )
    }
}