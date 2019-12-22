import React from 'react'
import {shallow, configure} from 'enzyme'
import Button from './Button'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()})
describe('Button', ()=> {
    describe('Renderig', () => {
        it('should match to snapshot', () => {
            const component = shallow(<Button/>)
            expect(component).toMatchSnapshot()
        });
    })
})