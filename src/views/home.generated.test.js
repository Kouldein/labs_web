import renderer from "react-test-renderer";
import React, { useEffect, useState } from "react";
import Home from "./home";
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history'
jest.mock("react-helmet");
jest.mock("../components/event");
jest.mock("react-router-dom");
jest.mock("./home.css");
jest.mock("axios");
jest.mock("../api/eventsAPI");

const renderTree = (tree) => renderer.create(tree);
describe("<Home>", () => {
  it("should render component", () => {
    const history = createMemoryHistory();
    const pushSpy = jest.spyOn(history, "push"); // or 'replace', 'goBack', etc.
    // render(
    //   <Router history={history}>
    //     <QuestionContainer />
    //   </Router>
    // );
    expect(renderTree(<Router history={history}><Home /></Router>).toJSON()).toMatchSnapshot();
  });
});
