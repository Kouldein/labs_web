import renderer from 'react-test-renderer';

import Register from './register';

jest.mock('react-router-dom');
jest.mock('../api/userAPI');
jest.mock('./register.css');

const renderTree = tree => renderer.create(tree);
describe('<Register>', () => {
  it('should render component', () => {
    expect(renderTree(<Register 
    />).toJSON()).toMatchSnapshot();
  });
  
});