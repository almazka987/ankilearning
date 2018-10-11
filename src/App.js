import React, { Component } from 'react';
import Question from './components/question';
import './App.css';
import Aclions from "./components/actions";

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Question />
                <Aclions />
            </React.Fragment>
        );
    }
}

export default App;
