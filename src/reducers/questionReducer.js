import { RECEIVE_QUESTION, UPDATE_QUESTION } from '../actions/question';
import { ADD_ANSWER, REMOVE_ANSWER } from '../actions/answers';

const initialState = {
    text: '',
    imageUrl: '',
    answers: []
};

export default function questionReducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_QUESTION:
            return {
                ...state,
                text: action.data.text,
                imageURL: action.data.imageURL,
                answers: action.data.answers
            };
        case ADD_ANSWER:
            return {
                ...state,
                answers: [...state.answers, action.data]
            };
        case REMOVE_ANSWER:
            const newAnswers = state.answers.filter(answer => answer.text !== action.text)
            return {
                ...state,
                answers: newAnswers
            };
        case UPDATE_QUESTION:
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
}