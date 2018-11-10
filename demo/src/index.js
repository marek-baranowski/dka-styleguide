import React, { Component } from "react";
import { render } from "react-dom";
import "tachyons/css/tachyons.min.css";

import { Text } from "../../src";

class Demo extends Component {
  render() {
    return (
      <div className="mw7 center mt4">
        <div>
          <Text>Hello</Text>
        </div>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
