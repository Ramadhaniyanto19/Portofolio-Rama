import React from "react";

class Advice extends React.Component {
  state = {
    Advice: "Best of The Best",
  };
  handleClick = () => {
    this.setState({
      Advice: "Loading...",
    });
    fetch("https://api.adviceslip.com/advoce")
      .then((response) => response.json())
      .then((data) => data.slip)
      .then(({ Advice }) => this.setState({ Advice: Advice }));
  };
  render() {
    return (
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <p className="lead mt-3">{this.state.Advice}</p>
          <p>- Me.</p>
          <button className="btn btn-primary" onClick={this.handleClick}>
            <i className="fas fa-sync fa-fw"></i>
          </button>
        </div>
      </div>
    );
  }
}
export default Advice;
