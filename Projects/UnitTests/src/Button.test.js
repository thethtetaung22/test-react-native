import React from 'react'
import { shallow, configure } from 'enzyme'
import Button from './Button'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })
describe('Button', () => {
    describe('Renderig', () => {
        it('should match to snapshot, Primary', () => {
            const component = shallow(<Button label="test label" primary />)
            expect(component).toMatchSnapshot()
        });
        it('should match to snapshot, Secondary', () => {
            const component = shallow(<Button label="test label" primary={false} />)
            expect(component).toMatchSnapshot()
        });
    })
})

describe('Interaction', () => {
    describe('onPressHandler', () => {
        const mockOnPress = jest.fn().mockName("onPress Mock Func");

        it('should call onPress', () => {
            const component = shallow(<Button label="Test Label" onPress={mockOnPress}/>).toJSON()
            const instance = component.instance()
            instance.onPressHandler();
            // instance.onPressHandler();

            expect(mockOnPress).toHaveBeenCalled();
            expect(mockOnPress).toHaveBeenCalledTimes(1)
        })
    })
})