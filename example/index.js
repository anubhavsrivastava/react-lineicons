import React from "react";
import ReactDOM from "react-dom";
import LineIcon from "../dist"
class HelloMessage extends React.Component {
  render() {
    return  <div>
			Hello <LineIcon size="lg" name="handshake" />
			<LineIcon size="lg" name="angellist" />
		</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage />, mountNode);
