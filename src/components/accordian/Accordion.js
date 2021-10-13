import { Component } from 'react'
import './accordian.css'

export default class Accordion extends Component {

    constructor(props) {
        super(props);
        this.open = props.open
        this.title = props.title
    }

    render() {
        return (
            <details open={this.open}>
                <summary>{this.title}</summary>
                {this.props.children}
            </details>
        )
    }
}