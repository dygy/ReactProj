import React, { Component } from 'react';
import Styles from './everyPage/Styles'
import Navbar from './everyPage/Navbar'
import Footer from './everyPage/Footer'
import Content from './HomeContent'
import TodoList from './TodoList'
class App extends Component {
    render() {
        return (
        <>
            <Styles/>
            <Navbar/>

            <Content/>
            <TodoList/>

            <Footer/>
            
        </>
        );
    }
}

export default App;
