import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswersList from '../components/AnswersList';
import AddAnswerForm from '../components/AddAnswerForm';

import { addAnswer, removeAnswer } from '../actions/answers';

class Answers extends Component {
    removeAnswer = (text) => {
        this.props.removeAnswer(text);
    }

    addAnswer = (answer) => {
        this.props.addAnswer(answer);
    }

    render() {
        return (
            <section>
                {this.props.answers.length ? <AnswersList answers={this.props.answers} removeAnswer={this.removeAnswer} /> : ''}
                <div>
                    <AddAnswerForm addAnswer={this.addAnswer} />
                </div>
            </section>
        );
    }

}

function mapStateToProps (state) {
    return {
        answers: state.question.answers
    }
}

export default connect(mapStateToProps, { addAnswer, removeAnswer })(Answers);