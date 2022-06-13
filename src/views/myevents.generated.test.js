import renderer from 'react-test-renderer';
import MyEvents from "./myevents";

jest.mock("react-router-dom");
jest.mock("../api/eventsAPI");

const renderTree = tree => renderer.create(tree);
describe('<MyEvents>', () => {
  it('should render component', () => {
    expect(renderTree(<MyEvents 
    />).toJSON()).toMatchSnapshot();
  });
  
});