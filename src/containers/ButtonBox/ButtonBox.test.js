import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { ButtonBox } from "./ButtonBox";
import Button from "../../components/Button/Button";

configure({ adapter: new Adapter() });

describe("<ButtonBox>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ButtonBox />);
  });

  it("should render Button", () => {
    expect(wrapper.find(Button));
  });

  it("should change the state", () => {
    wrapper.find(Button).simulate("click");

    expect(wrapper.state().counter).toBe(1);
  });

  it("should show hint, if number is equal to 1", () => {
    wrapper.find(Button).simulate("click");

    expect(
      wrapper
        .find("p")
        .at(1)
        .toBeNull()
    );
  });

  it("shouldn't show hint, if number is equal to 0", () => {
    expect(
      wrapper
        .find("p")
        .at(1)
        .toBe("Click Button!")
    );
  });
});
