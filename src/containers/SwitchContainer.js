import React from 'react'
import { Switch, Route } from "react-router-dom";
import ResumeContainer from "./ResumeContainer";
import HomeContainer from "./HomeContainer";
import ProjectContainer from "./ProjectContainer";

const SwitchContainer = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <HomeContainer/>
                </Route>
                <Route exact path='/resume'>
                    <ResumeContainer/>
                </Route>
                <Route exact path='/projects'>
                    <ProjectContainer/>
                </Route>
            </Switch>
        </main>
    )
}

export default SwitchContainer