import axios from 'axios';
import LocalStorageService from '../services/localStorageService';

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';

const LocalStorage = new LocalStorageService();

function receiveQuestion(data) {
    return {
        type: RECEIVE_QUESTION,
        data
    }
}

function formatResponse(response) {
    const { text, imageURL } = response.data.question;

    return {
        text,
        imageURL,
        answers: response.data.answers
    };
}

export function updateQuestion(text) {
    return dispatch => {
        dispatch({
            type: UPDATE_QUESTION,
            text
        })
    }
}

export function fetchQuestion() {
    const questionData = LocalStorage.getItem('questionData');
    if (questionData) {
        return dispatch => dispatch(receiveQuestion(questionData));
    } else {
        const request = axios.get('https://s3-us-west-2.amazonaws.com/toluna-frontend-developer-test/data.json');

        return (dispatch) => {
            request
                .then(response => {
                    dispatch(receiveQuestion(formatResponse(response)));
                });
        }
    }
}
