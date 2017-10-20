import { addAnswer, removeAnswer, ADD_ANSWER, REMOVE_ANSWER } from '../../actions/answers';

test('should set up adding a new answer', () => {
    const action = addAnswer({});
    
    expect(action).toEqual({
        type: ADD_ANSWER,
        data: {}
    });
});

test('should set up removing an answer', () => {
    const action = removeAnswer('test');

    expect(action).toEqual({
        type: REMOVE_ANSWER,
        text: 'test'
    });
});