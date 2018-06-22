import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateImg } from "../../ducks/reducer";

class StepTwo extends Component {
  render() {
    return (
      //  <div>{inventoryMap}</div>;
      <div>
        <form>
          <input
            placeholder="Image URL"
            value={this.props.img}
            onChange={e => this.props.updateImg(e.target.value)}
            type="text"
          />
          <input
            placeholder="name"
            value={this.props.img}
            onChange={e => this.props.updateImg(e.target.value)}
            type="text"
          />
        </form>
        <Link to="/Wizard/step1">
          <button>Previous</button>{" "}
        </Link>
        <Link to="/Wizard/step3">
          <button> Next</button>{" "}
        </Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    img: state.img
  };
}
export default connect(
  mapStateToProps,
  {
    updateImg
  }
)(StepTwo);
