import { Component } from 'react'

export default class Accordian extends Component {

    constructor(props) {
        super(props);
        this.open = props.open
        this.title = props.title
        this.content = props.content
    }

    render() {
        return (
            <details open={this.open}>
                <summary>{this.title}</summary>
                <p>{this.content}</p>
            </details>
        )
    }
}