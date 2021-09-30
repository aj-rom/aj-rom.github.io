import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return (
            <header id='jumbotron'>
                <hgroup>
                    <h1>Welcome!</h1>
                    <h2>This page is still a work in progress. Bare with me while I build this out to be an awesome portfolio!</h2>
                </hgroup>

                <details open={true}>
                    <summary>Switch Theme</summary>
                    <nav>
                        <ul>
                            <li>Theme:</li>
                            <li><a href="#" onClick={this.switchToAuto}>Auto</a></li>
                            <li><a href="#" onClick={this.switchToLight}>Light</a></li>
                            <li><a href="#" onClick={this.switchToDark}>Dark</a></li>
                        </ul>
                    </nav>
                </details>
            </header>
        )
    }

    switchToAuto = () => {
        changeTheme('auto')
    }

    switchToLight = () => {
        changeTheme('light')
    }

    switchToDark = () => {
        changeTheme('dark')
    }
}

function changeTheme(theme) {
    const node = document.querySelector('html')
    node.dataset.theme = theme
    return node
}
