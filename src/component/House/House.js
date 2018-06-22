import React from "react";

export default function House(props) {
  return (
    <div>
      <h1>House:{props.name} </h1>
      <h2>
        {" "}
        Address:{props.address} city:{props.city} {props.state} {props.zip}
      </h2>
      <h2>
        {" "}
        Mortgage:{props.mortgage} rent:{props.rent}
      </h2>
      <img src={props.img} alt="Houses" />
      <button onClick={() => props.delete(props.id)}> Delete </button>
    </div>
  );
}
