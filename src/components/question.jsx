import React, { Component } from 'react';
import './question.css';

class Question extends Component {

    render () {
        let {q, answ} = this.props.qData;
        return (
            <div className="alio-flip-box-wrapper">
                <div className="alio-flip-box">
                    <div className="flip-box-inner-wrapper">
                        <div className="flip-box-front">
                            <div className="flip-box-front-inner">
                                <h2 className="flip-box-heading">{q}</h2>
                            </div>
                        </div>
                        <div className="flip-box-back">
                            <div className="flip-box-back-inner"><h3>{q}</h3>
                                <div className="answer-holder" dangerouslySetInnerHTML={answ}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;