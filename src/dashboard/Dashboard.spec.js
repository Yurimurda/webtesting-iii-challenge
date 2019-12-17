// Test away
import React from 'react';
import Dashboard from './Dashboard';
import * as rtl from 'react-testing-library';



test('Dashboard Renders without Crashing', () =>{
 rtl.render(<Dashboard/>);
})


test("Dashboard Snapshot", () =>{
    const wrapper = rtl.render(<Dashboard/>)
    expect(wrapper.asFragment()).toMatchSnapshot()

})

test('Open and Unlocked by Default', () =>{
    const wrapper = rtl.render(<Dashboard />);
    expect(wrapper.getByText(/unlocked/i).textContent).toMatch(/unlocked/i)
    expect(wrapper.getByText(/open/i).textContent).toMatch(/open/i)
})


