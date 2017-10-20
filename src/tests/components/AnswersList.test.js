import React from 'react';
import { shallow, mount } from 'enzyme';
import AnswersList from '../../components/AnswersList';

const answersListMock = [
    {
        text: 'France',
        imageURL: 'France.png'
    },
    {
        text: 'Italy',
        imageURL: 'Italy.png'
    },
    {
        text: 'Romania',
        imageURL: 'Romania.png'
    },
];


describe('<AnswerListItem />', () => {
    it('should render 3 items received via props', () => {
        const wrapper = shallow(<AnswersList answers={answersListMock} />);
        expect(wrapper.find('AnswerItem').length).toBe(3);
    });

    it('should call the filterAnswers upon click', () => {
        const wrapper = shallow(<AnswersList answers={answersListMock} />);
        const spy = jest.spyOn(wrapper.instance(), 'filterAnswers');

        wrapper.find('.input-action').simulate('click');
        expect(spy).toBeCalled();

        spy.mockReset();
        spy.mockRestore();
    });

    it('should filter items', () => {
        const wrapper = shallow(<AnswersList answers={answersListMock} />);
        wrapper.setState({ filter: 'r' });
       
        wrapper.find('.input-action').simulate('click');
        expect(wrapper.find('AnswerItem').length).toBe(2);
    });

    it('should display back all the items when filter is empty', () => {
        const wrapper = shallow(<AnswersList answers={answersListMock} />);
        
        wrapper.setState({ filter: 'r' });
        wrapper.find('.input-action').simulate('click');
        expect(wrapper.find('AnswerItem').length).toBe(2);

        wrapper.setState({ filter: '' });
        wrapper.find('.input-action').simulate('click');
        expect(wrapper.find('AnswerItem').length).toBe(3);
    });

    it('should update the filtred list when receving new props', () => {
        const wrapper = mount(<AnswersList answers={answersListMock} />);
        wrapper.setState({ filter: 'r' });

        wrapper.find('.input-action').simulate('click');
        wrapper.setProps({ answers: [...answersListMock, { text: 'Argentina' }] });
        wrapper.update();

        expect(wrapper.find('AnswerItem').length).toBe(3);
    });
});