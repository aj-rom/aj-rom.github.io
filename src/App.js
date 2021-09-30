import React from 'react'
import Footer from "./components/Footer";
import Body from "./components/Jumbotron";
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <div className='container'>
            <header>
                <NavBar/>
            </header>
            <main>
                <Body />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default App
