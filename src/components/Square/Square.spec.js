import React from "react";
import { shallow } from "enzyme";
import Square from "./Square";

describe("Display", () => {
  let wrapper;

  beforeEach(
    () => (wrapper = shallow(<Square value="X" squareAction={jest.fn()} />))
  );

  it("should render a Square <button />", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });

  it("should render the value of value", () => {
    wrapper.setProps({ value: "test" });
    expect(wrapper.text()).toEqual("test");
  });
});
