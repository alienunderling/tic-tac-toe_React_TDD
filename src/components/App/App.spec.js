import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import TicTacToe from "../TicTacToe/TicTacToe";

describe("App", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render the snapshot correctly", () =>
    expect(wrapper).toMatchSnapshot());

  it("should render a <div />", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Tic Tac Toe Component", () => {
    expect(wrapper.containsMatchingElement(<TicTacToe />)).toEqual(true);
  });
});
