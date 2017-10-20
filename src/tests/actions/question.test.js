import { updateQuestion, UPDATE_QUESTION} from '../../actions/question';


test('should set up editing the question', () => {
    const action = updateQuestion('new');
    
    expect(action).toEqual({
        type: UPDATE_QUESTION,
        text: 'new'
    });
});
