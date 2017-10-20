import React from 'react';
import { shallow } from 'enzyme';
import AddAnswerForm from '../../components/AddAnswerForm';

describe('<AddAnswerForm />', () => {
    it('should render the form when clicking the plus button', () => {
        const wrapper = shallow(<AddAnswerForm />);
        
        expect(wrapper.find('form').length).toBe(0);
        wrapper.find('.circle.circle-small').simulate('click');
        expect(wrapper.find('form').length).toBe(1);
    });

    it('should call the addAnswer from props upon submitting', () => {
        const addAnswer = jest.fn();
        const preventDefault = jest.fn();
        const mockState = {
            text: 'test',
            imageURL: 'test.png',
            showForm: true
        };
        const wrapper = shallow(<AddAnswerForm addAnswer={addAnswer} />);

        wrapper.setState(mockState);
        wrapper.find('form').simulate('submit', { preventDefault });

        expect(addAnswer).toBeCalledWith({ text: 'test', imageURL: 'test.png' });
    });

    it('should call resetState after form submitted', () => {
        const addAnswer = jest.fn();
        const preventDefault = jest.fn();
        const wrapper = shallow(<AddAnswerForm addAnswer={addAnswer} />);
        const spy = jest.spyOn(wrapper.instance(), 'resetState');
        const mockState = {
            text: 'test',
            imageURL: 'test.png',
            showForm: true
        };

        wrapper.setState(mockState);
        wrapper.find('form').simulate('submit', { preventDefault });

        expect(spy).toBeCalled();
        
        spy.mockReset();
        spy.mockRestore();
    });
});