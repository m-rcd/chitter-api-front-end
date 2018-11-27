import React from 'react';
import renderer from 'react-test-renderer';
// import Enzyme, { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Peep from '../components/peeps';

// Enzyme.configure({ adapter: new Adapter() });

it('Peep Snapshot', () => {
  const tree = renderer.create(<Peep />).toJSON();
  expect(tree).toMatchSnapshot();
});

// describe('componentDidMount', () => {
//   beforeEach(() => {
//     fetch.resetMocks()
//   })
//
//   it('sets the state componentDidMount', async () => {
//     fetch.mockResponseOnce(JSON.stringify({body: 'hi'}))
//     fetch('https://chitter-backend-api.herokuapp.com/peeps').then(res => {
//       expect(res.body).toEqual('hi')
//     })
//
//     expect(fetch.mock.calls.length).toEqual(1)
//
//
//     const wrapper = shallow(<Peep/>)
//
//   })
// })
