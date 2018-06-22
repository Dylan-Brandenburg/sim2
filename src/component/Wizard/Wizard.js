import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import StepOne from "../Steps/StepOne";
import StepTwo from "../Steps/StepTwo";
import StepThree from "../Steps/StepThree";
import { connect } from "react-redux";
import {
  updateRent,
  updateMortgage,
  updateZipcode,
  updateState,
  updateCity,
  updateName,
  updateAddress,
  updateImg
} from "../../ducks/reducer";

class Wizard extends Component {
  constructor() {
    super();
    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    this.props.updateName("");
    this.props.updateAddress("");
    this.props.updateState("");
    this.props.updateCity("");
    this.props.updateZipcode(0);
    this.props.updateImg("");
    this.props.updateRent(0);
    this.props.updateMortgage(0);
  }
  render() {
    return (
      <div>
        Wizard
        <Switch>
          <Route path="/wizard/step1" component={StepOne} />
          <Route path="/wizard/step2" component={StepTwo} />
          <Route path="/wizard/step3" component={StepThree} />
        </Switch>
        <Link to="/">
          <button onClick={this.refresh}>Cancel </button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(
  mapStateToProps,
  {
    updateMortgage,
    updateRent,
    updateZipcode,
    updateState,
    updateCity,
    updateName,
    updateAddress,
    updateImg
  }
)(Wizard);
