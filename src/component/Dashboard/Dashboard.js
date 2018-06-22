import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import House from "../House/House";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houseList: []
    };
  }
  componentDidMount() {
    this.getHouses();
  }
  getHouses = () => {
    axios.get("/api/houses").then(response => {
      this.setState({ houseList: response.data });
    });
  };
  deleteHouse = id => {
    axios.delete(`/api/house/${id}`).then(res => {});
  };
  render() {
    let list = this.state.houseList.map((house, i) => {
      return (
        <House
          key={i}
          name={house.name}
          address={house.address}
          city={house.city}
          state={house.state}
          zip={house.zip}
          img={house.img}
          mortgage={house.mortgage}
          rent={house.rent}
          id={house.id}
          delete={this.deleteHouse}
        />
      );
    });
    return (
      <div className="Dashboard">
        Dashboard
        {list}
        <Link to="/Wizard/Step1">
          <button>Add New Property </button>
        </Link>
      </div>
    );
  }
}
