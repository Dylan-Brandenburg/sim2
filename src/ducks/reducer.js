let initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  img: "",
  mortgage: 0,
  rent: 0
};

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";
const UPDATE_IMG = "UPDATE_IMG";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_RENT = "UPDATE_RENT";

export function updateRent(rent) {
  return {
    type: UPDATE_RENT,
    payload: rent
  };
}
export function updateMortgage(mortgage) {
  return {
    type: UPDATE_MORTGAGE,
    payload: mortgage
  };
}
export function updateImg(img) {
  return {
    type: UPDATE_IMG,
    payload: img
  };
}

export function updateZipcode(zipcode) {
  return {
    type: UPDATE_ZIPCODE,
    payload: zipcode
  };
}
export function updateState(state) {
  return {
    type: UPDATE_STATE,
    payload: state
  };
}
export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}
export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  };
}
export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}

//REDUCER FUNCTION
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_ADDRESS":
      return { ...state, address: action.payload };
    case "UPDATE_CITY":
      return { ...state, city: action.payload };
    case "UPDATE_IMG":
      return { ...state, img: action.payload };
    case "UPDATE_STATE":
      return { ...state, state: action.payload };
    case "UPDATE_ZIPCODE":
      return { ...state, zipcode: action.payload };
    case "UPDATE_MORTGAGE":
      return { ...state, mortgage: action.payload };
    case "UPDATE_RENT":
      return { ...state, rent: action.payload };
    default:
      return state;
  }
}
