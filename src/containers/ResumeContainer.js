import React, { Component } from 'react'
import Jumbotron from "../components/Jumbotron";

export default class ResumeContainer extends Component {

    render() {
        return (
            <section>
                <Jumbotron>
                    <h1>Resume</h1>
                    <h2>My past work experience along with proficient tools, languages, and frameworks.</h2>
                </Jumbotron>

                <div className='grid'>
                    <article>
                        <hgroup>
                            <h3>Languages</h3>
                            <h4>Programming languages I am proficient in.</h4>
                        </hgroup>
                        <ul>
                            <li>
                                <b>Ruby</b>
                                <ul>
                                    <li>Ruby Version Manager</li>
                                    <li>Bundler</li>
                                </ul>
                            </li>
                            <li>
                                <b>JavaScript</b>
                                <ul>
                                    <li>Node & Yarn Package Managers</li>
                                    <li>Fetch API & Ajax</li>
                                    <li>ES6+</li>
                                </ul>
                            </li>
                            <li>
                                <b>SQL</b>
                                <ul>
                                    <li>MySQL</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </li>
                            <li>
                                <b>HTML</b>, <b>CSS</b>, and <b>SCSS</b>
                                <ul>
                                    <li>Bootstrap</li>
                                    <li>Responsive Layouts</li>
                                    <li>SEO Integration</li>
                                </ul>
                            </li>
                        </ul>
                    </article>

                    <article>
                        <hgroup>
                            <h3>Frameworks</h3>
                            <h4>Some frameworks I am proficient in.</h4>
                        </hgroup>
                        <ul>
                            <li>
                                <b>Ruby on Rails</b>
                                <ul>
                                    <li>Bcrypt</li>
                                    <li>Devise with OmniAuth</li>
                                    <li>Fast JsonAPI</li>
                                    <li>RSpec Rails</li>
                                </ul>
                            </li>
                            <li>
                                <b>React.js</b>
                                <ul>
                                    <li>React-Redux</li>
                                    <li>Redux-Thunk</li>
                                    <li>React-Router</li>
                                </ul>
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
        )
    }
}