import React, { Component } from 'react';
import './actions.css';

class Aclions extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="list-group action-links">
                            <a href="" className="list-group-item list-group-item-action list-group-item-dark"><span className="link-txt">Не помню (повтор завтра)</span><span className="link-info">Отложено 14 карточек</span></a>
                            <a href="" className="list-group-item list-group-item-action list-group-item-dark"><span className="link-txt">Легко (повтор через 3 дн)</span><span className="link-info">Отложено 14 карточек</span></a>
                            <a href="" className="list-group-item list-group-item-action list-group-item-dark"><span className="link-txt">Очень легко (повтор через 6 дн)</span><span className="link-info">Отложено 14 карточек</span></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aclions;