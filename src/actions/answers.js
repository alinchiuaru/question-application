export const ADD_ANSWER = 'ADD_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';

export function addAnswer(data) {
    return {
        type: ADD_ANSWER,
        data
    }
}

export function removeAnswer(text) {
    return {
        type: REMOVE_ANSWER,
        text
    }
}
