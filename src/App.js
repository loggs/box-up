import React from "react";
import { Motion, spring } from "react-motion";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  handleOnClick = () => {
    console.log(this.state);
    this.setState({ items: [...this.state.items, 1] });
  };

  render() {
    const squares = this.state.items.map((_, k) => (
      <div key={k} className="demo0-block" />
    ));
    return (
      <div>
        <div>{this.state.items.length}</div>
        <Motion
          style={{
            x: spring(50)
          }}
        >
          {({ x }) => (
            // children is a callback which should accept the current value of
            // `style`
            <div className="outer">
              {this.state.items.map((_, k) => (
                <div
                  className="demo0-block"
                  key={k}
                  style={{
                    position: "absolute",
                    bottom: k * x,
                    left: "100px"
                  }}
                >
                  {k}
                </div>
              ))}
            </div>
          )}
        </Motion>
        <button className="toggle" onClick={this.handleOnClick}>
          Toggle
        </button>
      </div>
    );
  }
}
