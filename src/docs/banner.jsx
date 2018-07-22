import React, { Component } from "react";
import coverImg from "./assets/images/cover.jpg";
class Banner extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { color, children } = this.props;
    return (
        <div className="jumbotron" style={{backgroundImage:coverImg}}>
        <h1 className="display-4">Google Chart with React</h1>
        <p className="lead">Google Chart is very popular and simple Chart which can be use for any purpose.</p>
        <hr className="my-4"/>
        <p>Developed with passion to help you</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="https://developers.google.com/chart/" target="_blank" role="button">Learn more</a>
        </p>
      </div>
    );
  }
}

export default Banner;
