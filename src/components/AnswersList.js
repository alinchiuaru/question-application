import React, { Component } from 'react';
import AnswerItem from './AnswerItem';

class AnswersList extends Component {
    constructor(props) {
        super(props);
        this.state = { filter: '', filtredAnswers: this.props.answers };
    }

    componentWillReceiveProps = (nextProps) => {
        if ( nextProps.answers !== this.state.filtredAnswers ) {
            this.setState({ filtredAnswers: nextProps.answers }, () => {
                this.filterAnswers(this.state.filter);
            });
        }
    }

    renderAnswers = () => {
        const answers = this.state.filtredAnswers.map((answer, index) => {
            return (
                <AnswerItem 
                    text={answer.text}
                    imageURL={answer.imageURL}
                    key={index}
                    handleClick={this.props.removeAnswer}
                />
            );
        });

    
        return (
            <div className="items">
                {answers}
            </div>
        );
    }

    handleFilterChange = (event) => {
        const filter = event.target.value.toLowerCase();
        
        this.setState({
            filter
        });
    }

    filterAnswers = (filterText) => {
        const filteredList = this.props.answers.filter(answer => {
            return answer.text.toLowerCase().search(filterText) !== -1;
        });
     
        this.setState({
            filtredAnswers: filteredList
        });
    }

    render() {
        return (
            <div>
                <div className="section-title">
                    <hr className="title-wrap" />
                    <h1>Answers</h1>
                    <hr className="title-wrap" />
                </div>

                <div className="input-container">
                    <input 
                        name="filterAnswers"
                        type="text"
                        onChange={this.handleFilterChange}
                        className="custom-input" 
                        placeholder="Search answers" />
                    <button onClick={() => this.filterAnswers(this.state.filter)} className="input-action">SEARCH</button>
                </div>

                { this.renderAnswers() }
            </div>
        );
    }
}

export default AnswersList;