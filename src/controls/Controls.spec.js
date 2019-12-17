import React from 'react';
import * as rtl from 'react-testing-library';
import '@testing-library/jest-dom/extend-expect';

import Controls from './Controls';
import expectExport from 'expect';


test('controls renders without crashing', () =>{
    rtl.render(<Controls/>)
})


test('Controls snapshot', () =>{
    const wrapper = rtl.render(<Controls/>)
    expect(wrapper.asFragment()).toMatchSnapshot()
})


test("Buttons display in document", () =>{
    const wrapper = rtl.render(<Controls/>)
    const button1 = wrapper.getByTestId('button1');
    const button2 = wrapper.getByTestId('button2');
    expect(button1).toBeInTheDocument()
    expect(button2).toBeInTheDocument()
})


test("button text reflects state", () =>{
    const wrapper = rtl.render(<Controls/>)
    const button1 = wrapper.getByTestId('button1');
    const button2 = wrapper.getByTestId('button2');
    const lockbutton1 = button1.getAttribute('disabled');
    const lockbutton2 = button2.getAttribute('disabled');

    lockbutton1 === false ? expect(button1.textContent).toMatch(/unlock gate/i) :
    expect(button1.textContent).toMatch(/lock gate/i)

    lockbutton2 === false ? expect(button2.textContent).toMatch(/unlock gate/i) :
    expect(button2.textContent).toMatch(/lock gate/i)
})