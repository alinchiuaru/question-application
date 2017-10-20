import questionReducer from '../../reducers/questionReducer';
import { UPDATE_QUESTION } from '../../actions/question';
import { ADD_ANSWER, REMOVE_ANSWER } from '../../actions/answers';

const initialState = {
    text: '',
    imageUrl: '',
    answers: []
};

const someState = {
    text: 'Test',
    imageURL: 'test.png',
    answers: [
        {
            text: 'answer1',
            imageURL: 'answer1.png'
        },
        {
            text: 'answer2',
            imageURL: 'answer2.png'
        }
    ]
};

test('should return the initial state', () => {
    expect(questionReducer(undefined, {})).toEqual(initialState);
});

test('should handle UPDATE_QUESTION', () => {
    const state = questionReducer(initialState, {
        type: UPDATE_QUESTION,
        text: 'Test'
    });

    expect(state).toEqual({
        ...initialState,
        text: 'Test'
    });
});

test('should handle ADD_ANSWER to an empty list', () => {
    const state = questionReducer(initialState, {
        type: ADD_ANSWER,
        data: { text: 'test', imageURL: 'test.png' }
    });

    expect(state).toEqual({
        ...initialState,
        answers: [{text: 'test', imageURL: 'test.png'}]
    });
});

test('should handle ADD_ANSWER to an existing list', () => {
    const state = questionReducer(someState, {
        type: ADD_ANSWER,
        data: { text: 'test', imageURL: 'test.png' }
    });

    expect(state).toEqual({
        ...someState,
        answers: [...someState.answers, { text: 'test', imageURL: 'test.png' }]
    });
});

test('should handle REMOVE_ANSWER', () => {
    const state = questionReducer(someState, {
        type: REMOVE_ANSWER,
        text: 'answer2'
    });

    expect(state).toEqual({
        ...someState,
        answers: [
            {
                text: 'answer1',
                imageURL: 'answer1.png'
            }
        ]
    });
});