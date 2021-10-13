import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Accordion from "../components/accordian/Accordion";
import Button from "../components/buttons/Button";

export default class HomeContainer extends Component {
    render() {
        return (
            <section>
                <Jumbotron>
                    <h1>Welcome!</h1>
                    <h2>This page is still a work in progress. Bare with me while I build this out to be an awesome portfolio!</h2>
                </Jumbotron>
                <br/>
                <Accordion open={true} title='Theme Switcher'>
                    <nav>
                        <ul>
                            <li>Theme:</li>
                            <li>
                                <Button className='contrast' onClick={this.switchToAuto}>Auto</Button>
                            </li>
                            <li>
                                <Button className='primary' onClick={this.switchToLight}>Light</Button>
                            </li>
                            <li>
                                <Button className='secondary' onClick={this.switchToDark}>Dark</Button>
                            </li>
                        </ul>
                    </nav>
                </Accordion>
            </section>
        )
    }

    switchToAuto = (e) => {
        changeTheme('auto', e)
    }

    switchToLight = (e) => {
        changeTheme('light', e)
    }

    switchToDark = (e) => {
        changeTheme('dark', e)
    }
}

function changeTheme(theme, event) {
    event.preventDefault()
    const node = document.querySelector('html')
    node.dataset.theme = theme
    return node
}
