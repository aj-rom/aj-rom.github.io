import React from 'react'
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { HashRouter } from "react-router-dom";
import SwitchContainer from "./containers/SwitchContainer";

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
