import renderer from 'react-test-renderer';
import Login from "./login";

jest.mock("./login.css");
jest.mock('../api/userAPI');
jest.mock("react-router-dom");

const renderTree = tree => renderer.create(tree);
describe('<Login>', () => {
  it('should render component', () => {
    expect(renderTree(<Login 
    />).toJSON()).toMatchSnapshot();
  });
  
});