import React from 'react';
import { shallow, configure } from 'enzyme';
import Auth from './Auth';
import Adapter from 'enzyme-adapter-react-16';
import { Login } from '@connacx/cx-reactnative-comps';
import { fireEvent, render } from 'react-native-testing-library'

configure({ adapter: new Adapter() });
describe('Auth', () => {
    describe('Renderig', () => {
        it('should match to snapshot, Auth', () => {
            const wrapper = shallow(<Auth> <Login /> </Auth>);
            expect(wrapper.find(Login)).toMatchSnapshot();
        });
    });

    decribe('Email and Password input testing not null', () => {
        const { getByTestId } = render(<Login />);
        // use fireEvent change value TextInput
        fireEvent.changeText(getByTestId('email'), 'isstring');
        fireEvent.changeText(getByTestId('password'), 'isstring');

        // use toEqual check value TextIut
        expect(getByTestId('email').props.value).not.toBe(null);
        expect(getByTestId('password').props.value).not.toBe(null);
    });

    decribe('Email and Password input testing null', () => {
        const { getByTestId } = render(<Login />);
        // use fireEvent change value TextInput
        fireEvent.changeText(getByTestId('email'), 'isstring');
        fireEvent.changeText(getByTestId('password'), 'isstring');

        // use toEqual check value TextInput
        expect(getByTestId('email').props.value).toBe(null);
        expect(getByTestId('password').props.value).toBe(null);
    });

    describe('Submit button press testing', () => {
        const mockSubmit = jest.fn();

        const component = shallow(<Auth><Login onSubmitButton={mockSubmit}/></Auth>);
        const instance = component.getInstance();
        instance.onPressHandler()
        expect(mockSubmit).toHaveBeenCalled();
    });
    describe('Submit button not press testing', () => {
        const mockSubmit = jest.fn();

        const component = shallow(<Auth><Login onSubmitButton={mockSubmit}/></Auth>);
        const instance = component.getInstance();
        // instance.onPressHandler()
        expect(mockSubmit).not.toHaveBeenCalled();
    });
    describe('onChangeEmail func testing', () => {
        const mockEmail = jest.fn();

        const component = shallow(<Auth><Login onChangeEmail={mockEmail}/></Auth>);
        const instance = component.getInstance();
        instance.onPressHandler()
        expect(mockEmail).toHaveBeenCalled();
    });
    describe('onChangeEmail func not called testing', () => {
        const mockEmail = jest.fn();

        const component = shallow(<Auth><Login onChangeEmail={mockEmail}/></Auth>);
        const instance = component.getInstance();
        // instance.onPressHandler()
        expect(mockEmail).toHaveBeenCalled();
    });
    describe('onChangePassword func not called testing', () => {
        const mockPassword = jest.fn();

        const component = shallow(<Auth><Login onChangePassword={mockPassword}/></Auth>);
        const instance = component.getInstance();
        instance.onPressHandler()
        expect(mockPassword).toHaveBeenCalled();
    });
    describe('onChangePassword func called testing', () => {
        const mockPassword = jest.fn();

        const component = shallow(<Auth><Login onChangePassword={mockPassword}/></Auth>);
        const instance = component.getInstance();
        // instance.onPressHandler()
        expect(mockPassword).not.toHaveBeenCalled();
    });
});
