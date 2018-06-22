import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import {
  updateZipcode,
  updateState,
  updateCity,
  updateName,
  updateAddress,
  updateImg,
  updateMortgage,
  updateRent
} from "../../ducks/reducer";

class StepThree extends Component {
  addHouse() {
    let house = {
      name: this.props.name,
      address: this.props.address,
      city: this.props.city,
      state: this.props.state,
      zipcode: this.props.zipcode,
      img: this.props.img,
      mortgage: this.props.mortgage,
      rent: this.props.rent
    };
    axios
      .post("/api/house")
      .then(res => {
        this.props.updateName("");
        this.props.updateAddress("");
        this.props.updateState("");
        this.props.updateCity("");
        this.props.updateZipcode(0);
        this.props.updateImg("");
        this.props.updateRent(0);
        this.props.updateMortgage(0);
      })
      .catch(err => console.log("ERRR"));
  }
  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Mortgage"
            value={this.props.mortgage}
            onChange={e => this.props.updateMortgage(e.target.value)}
            type="number"
          />
          <input
            placeholder="Rent"
            value={this.props.rent}
            onChange={e => this.props.updateRent(e.target.value)}
            type="number"
          />
        </form>

        <Link to="/wizard/step2">
          <button>Previous Step</button>
        </Link>
        <Link to="/">
          <button onClick={this.addHouse()}>Complete</button>
        </Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    name: state.name,
    address: state.address,
    zipcode: state.zipcode,
    state: state.state,
    city: state.city,
    img: state.img,
    mortgage: state.mortgage,
    rent: state.rent
  };
}
export default connect(
  mapStateToProps,
  {
    updateZipcode,
    updateState,
    updateCity,
    updateName,
    updateAddress,
    updateImg,
    updateMortgage,
    updateRent
  }
)(StepThree);
