import React, { Component } from 'react'
import { connect } from "react-redux";
import {fetchProjects} from "../actions/projectActions";
import Project from "../components/Project";
import Jumbotron from "../components/home/Jumbotron";

class ProjectContainer extends Component {

    componentDidMount() {
        this.props.fetchProjects()
    }

    renderProjects() {
        return this.props.projects.map( project => {
            return <Project project={project}/>
        })
    }

    render() {
        return (
            <section>
                <Jumbotron>
                    <h1>Pinned Projects</h1>
                    <h2>Some of my important projects.</h2>
                </Jumbotron>
                <div id='projects'>
                    {this.renderProjects()}
                </div>
            </section>
        )
    }
}

const mapStateToProps = ( state ) => ({
    projects: state.projectsReducer.projects
})

export default connect(mapStateToProps, ({ fetchProjects }))(ProjectContainer)