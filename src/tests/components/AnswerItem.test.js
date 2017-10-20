import React from 'react';
import { mount } from 'enzyme';
import AnswerItem from '../../components/AnswerItem';


describe('<AnswerItem />', () => {
    it('allows to set props', () => {
        const wrapper = mount(<AnswerItem text="test" />);
        expect(wrapper.props().text).toBe('test');
        wrapper.setProps({ imageURL: 'test.png' });
        expect(wrapper.props().imageURL).toBe('test.png');
    });

    it('renders title correctly', () => {
        const wrapper = mount(<AnswerItem text="test" />);
        expect(wrapper.find('.title').text()).toBe('test');
    });

    it('simultes click events', () => {
        const handleClick = jest.fn();
        const wrapper = mount(<AnswerItem text="testClick" handleClick={handleClick} />);
        
        wrapper.find('.item-action').simulate('click');
        expect(handleClick).toBeCalledWith('testClick');
    });
});