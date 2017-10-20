import React, { Component } from 'react';

class QuestionItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, text: this.props.text };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.text !== this.state.text) {
            this.setState({ text: nextProps.text })
        }
    }

    toggle = () => {
        this.setState({ isEditing: !this.state.isEditing });
    }

    handleInputChange = (event) => {
        this.setState({ text: event.target.value });
    }

    handleButtonClick = () => {
        if (this.state.isEditing) {
            this.props.handleClick(this.state.text);
            this.toggle();
        } else {
            this.toggle();
        }
    }

    render() {
        return (
            <section>
                <img src={this.props.imageURL} className="circle" alt="main-question" />
                
                <div className="section-title">
                    <hr className="title-wrap" />
                    <h1>Question</h1>
                    <hr className="title-wrap" />
                </div>

                <div className="input-container">
                    <input
                        name="questionText"
                        type="text" 
                        className="custom-input" 
                        onChange={this.handleInputChange}
                        value={this.state.text}
                        disabled={!this.state.isEditing} 
                        />
                    <button onClick={this.handleButtonClick} className="input-action primary">{ this.state.isEditing ? 'SAVE' : 'EDIT' }</button>
                </div>
            </section>
        );
    }
}

export default QuestionItem;