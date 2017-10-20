import React from 'react';
import { shallow } from 'enzyme';
import QuestionItem from '../../components/QuestionItem';

describe('<QuestionItem />', () => {
    it('sets the correct default input value', () => {
        const wrapper = shallow(<QuestionItem text="test" />);
        expect(wrapper.find('.custom-input').props().value).toBe('test');
    });

    it('should render the input disabled or not if editing', () => {
        const wrapper = shallow(<QuestionItem />);
        expect(wrapper.find('.custom-input').props().disabled).toBeTruthy();
        wrapper.setState({ isEditing: true });
        expect(wrapper.find('.custom-input').props().disabled).toBeFalsy();
    });

    it('renders the correct text in the action button depending on state', () => {
        const wrapper = shallow(<QuestionItem />);
        const getButtonText = () => wrapper.find('.input-action').text();
        
        expect(getButtonText()).toBe('EDIT');
        wrapper.setState({isEditing: true});
        expect(getButtonText()).toBe('SAVE');
    });

    it('should updated the state when typing in the question input', () => {
        const wrapper = shallow(<QuestionItem />);
       
        wrapper.find('.custom-input').simulate('change', {target: {value: 'test'}});
        expect(wrapper.state().text).toBe('test');
    });

    it('should call the props function when editing the question', () => {
        const handleClick = jest.fn();
        const wrapper = shallow(<QuestionItem text="testClick" handleClick={handleClick} />);
        wrapper.setState({ isEditing: true });
        
        wrapper.find('.input-action').simulate('click');
        expect(handleClick).toBeCalledWith('testClick');
    });

    it('should call the toggle method before editing', () => {
        const wrapper = shallow(<QuestionItem />);
        const spy = jest.spyOn(wrapper.instance(), 'toggle');

        wrapper.find('.input-action').simulate('click');

        expect(spy).toBeCalled();

        spy.mockReset();
        spy.mockRestore();
    });
});