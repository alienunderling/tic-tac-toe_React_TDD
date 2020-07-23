import React from "react";
import { shallow } from "enzyme";
import Board from "./Board";

describe("Board", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Board renderSquare={jest.fn()} />);
  });

  it("should render a Board <div />", () => {
    expect(wrapper.find("div").length).toEqual(4);
  });
});
