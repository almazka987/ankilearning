//import fs from 'fs';
import React, { Component } from 'react';
import Remarkable from 'remarkable';
import Question from './components/question';
import './App.css';
import Actions from "./components/actions";
import questions from "./questions";

class App extends Component {
    state = {
        randomQuestion : this.getRandomQuestion(),
        value: 'Hello, **world**!',
    };

    getRawMarkup(txt) {
        const md = new Remarkable();
        return { __html: md.render(txt) };
    };

    getRandomQuestion() {
        let objKeys = Object.keys(questions);
        let randKey = objKeys[Math.floor(Math.random()*objKeys.length)];
        let randQObj = questions[randKey];
        randQObj.answ = this.getRawMarkup(randQObj.answ);
        return randQObj;
    };

    updateQuestionData = ({newLvl, newGo}) => {
        let qObject = this.state.randomQuestion;
    };

    changeHandler = (e) => {
        /*if (e.target.value.length > 0) {
            let styleArr = [...this.state.inCls];
            styleArr.push('redBord');
            this.setState({inCls : styleArr}, console.log('this.state', this.state));
        }*/
    };

    render() {
        /*let data = JSON.stringify({
            "id": "0788",
                "learnlvl": 666,
                "go": "2018-10-13",
                "q": "Что ваще такое node.js?",
                "answ": "node.js - если сказать, что это набор прог - это не корректно сказано, скорее именно программная среда. Состав: движок v8 хромовский, а внутри движка того есть интерпретатор js. Еще в составе npm (Node.js Package Manager), который оперирует модулями и репо с кучей модулей, написанных на c++, и на js, и на json тоже. Ну короче как программа это устанавливается и получается среда для разработки."
        });
        fs.writeFile("./questions.json", data);*/
        /*fs.readFile('./questions.json', function (err, content) {
            if (err) throw console.log('err', err); // обработали ошибку
            console.log(decodeURIComponent(content));
        });*/
        //console.log('fs', fs);
        return (
            <React.Fragment>
                <input type="text" onChange={e => this.changeHandler(e)} className={this.state.inCls.join(' ')} />
                <Question qData={this.state.randomQuestion} />
                <Actions lvl={this.state.randomQuestion.learnlvl} clickAction={this.updateQuestionData} />
            </React.Fragment>
        );
    }
}

export default App;
