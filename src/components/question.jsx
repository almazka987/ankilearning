import React, { Component } from 'react';
import './question.css';

class Question extends Component {
    render () {
        return (
            <div className="alio-flip-box-wrapper">
                <div className="alio-flip-box">
                    <div className="flip-box-inner-wrapper">
                        <div className="flip-box-front">
                            <div className="flip-box-front-inner">
                                <h2 className="flip-box-heading">Что такое реакт?</h2>
                                Что такое Реакт?
                            </div>
                        </div>
                        <div className="flip-box-back">
                            <div className="flip-box-back-inner"><h3>Build Something Beautiful</h3>
                                Dozens of well designed shortcodes loaded with options gives you perfect freedom.
                                <p></p>
                                <div className="alio-button-wrapper alio-aligncenter">
                                    <a className="alio-button button-flat alio-button-round button-large button-default button-4"><span
                                        className="alio-button-text">Buy Avada Now</span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;