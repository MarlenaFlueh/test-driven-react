import React, { Component } from "react";
import styled from "styled-components";

import Button from "../../components/Button/Button";

const Box = styled.div`
  height: 30%;
  width: 30%;
  position: absolute;
  background-color: #fcf4ff;
`;

class ButtonBox extends Component {
  state = {
    counter: 0
  };

  doIncrement = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  render() {
    return (
      <Box>
        <p>
          Number:&nbsp;
          {this.state.counter}
        </p>
        <Button onClick={this.doIncrement}>submit</Button>
      </Box>
    );
  }
}

export default ButtonBox;
