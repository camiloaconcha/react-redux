import React from 'react';
import Header from './Header';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

//Note how with shallow render you search for the react component tag
it('contains 3 navlinks via shallow', () => {
    const numLinks = shallow(<Header />).find('NavLink').length;
    expect(numLinks).toEqual(3);
});

//note how with mount you search for the final renderd HTML since it generates the final DOM,
//We also need to pull in React Router's Memory Router for testing since the HEader expects to hace React Router's props passed in.
it('contains 3 anchors via mount', () => {
    const numAnchors = mount(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    ).find('a').length;

    expect(numAnchors).toEqual(3);
});
