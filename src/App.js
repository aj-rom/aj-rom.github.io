import React from 'react'
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import SwitchContainer from "./containers/SwitchContainer";

const App = () => {
    return (
        <div className='container'>
            <BrowserRouter>
                <NavBar/>
                <SwitchContainer/>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
