import React, { Component } from 'react';
//import logo from './logo.svg';
import '../Styles/App.css';
import Navbar from './Navbar'
import Footer from './Footer'
import Content from './HomeContent'

class App extends Component {
    render() {
        return (
        <>
            <Navbar/>
            <Content/>
            <Footer/>
        </>
        );
    }
}

export default App;
