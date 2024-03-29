import React from 'react'
import Footer from "./components/Footer";
import NavBar from "./components/navigation/NavBar";
import { HashRouter } from "react-router-dom";
import SwitchContainer from "./containers/SwitchContainer";

import './style/index.css'
const App = () => {
    return (
        <div className='container'>
            <HashRouter>
                <NavBar/>
                <SwitchContainer/>
                <Footer />
            </HashRouter>
        </div>
    )
}

export default App
