import React from "react";

class Class_Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "白色" };
    this.buttonHandler = this.buttonHandler.bind(this); // Class Component不方便的地方,使用Class內的function一定要這樣做(綁定)
  }

  componentDidMount() {
    console.log("車子確實有備渲染");
  }

  componentDidUpdate() {
    console.log("車子狀態已被更新");
  }

  buttonHandler() {
    this.setState({ color: "深綠色" });
  }

  render() {
    return (
      <div>
        <h2>
          我是一台{this.props.brand}
          {this.state.color}車
        </h2>
        <button onClick={this.buttonHandler}>改變顏色</button>
      </div>
    );
  }
}

export default Class_Component;
