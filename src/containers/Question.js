import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestion, updateQuestion } from '../actions/question';
import QuestionItem from '../components/QuestionItem';

class Question extends Component {
    componentDidMount() {
        this.props.fetchQuestion();
    }

    editQuestion = (text) => {
        this.props.updateQuestion(text);
    }

    render() {
        return (
            <QuestionItem text={this.props.question.text} imageURL={this.props.question.imageURL} handleClick={this.editQuestion} />
        );
    }
}

function mapStateToProps (state) {
    return {
        question: state.question
    }
}

export default connect(mapStateToProps, { fetchQuestion, updateQuestion })(Question);