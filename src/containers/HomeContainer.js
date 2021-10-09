import React, { Component } from "react";
import Jumbotron from "../components/home/Jumbotron";
import Accordion from "../components/Accordion";

export default class HomeContainer extends Component {
    render() {
        return (
            <section>
                <Jumbotron>
                    <h1>Welcome!</h1>
                    <h2>This page is still a work in progress. Bare with me while I build this out to be an awesome portfolio!</h2>
                </Jumbotron>

                <Accordion open={true} title='Theme Switcher'>
                    <nav>
                        <ul>
                            <li>Theme:</li>
                            <li><a onClick={this.switchToAuto}>Auto</a></li>
                            <li><a onClick={this.switchToLight}>Light</a></li>
                            <li><a onClick={this.switchToDark}>Dark</a></li>
                        </ul>
                    </nav>
                </Accordion>
            </section>
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
