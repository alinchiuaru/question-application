import React from 'react';

const AnswerItem = (props) => {
    return (
        <div className="item-container">
            <div className="item-info">
                <img className="circle circle-medium" src={props.imageURL} alt={props.text} />
                <h2 className="title">{props.text}</h2>
            </div>

            <div onClick={() => { props.handleClick(props.text) }} className="item-action">
                <div className="circle circle-small">
                    <hr className="minus" />
                </div>
            </div>
        </div>
    );
}

export default AnswerItem;