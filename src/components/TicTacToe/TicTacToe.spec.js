import React from "react";
import { shallow } from "enzyme";
import TicTacToe from "./TicTacToe";

describe("TicTacToe", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<TicTacToe />)));

  it("should render a TicTacToe <div />", () => {
    expect(wrapper.find("div").length).toEqual(2);
  });
});
