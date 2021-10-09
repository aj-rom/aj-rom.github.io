import React, { Component } from 'react'

export default class Jumbotron extends Component {
    render() {
        return (
            <header id='jumbotron'>
                <hgroup>
                    { this.props.children }
                </hgroup>
            </header>
        )
    }


}

