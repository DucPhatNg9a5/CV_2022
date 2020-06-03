import {
  REQUEST_CATS_PENDING,
  REQUEST_CATS_SUCCESS,
  REQUEST_CATS_FAILED,
  CHANGE_SEARCH_FIELD,
} from "../actions/types";

import axios from "axios";

export const requestCats = () => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_CATS_PENDING });
    // await fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => dispatch({ type: REQUEST_CATS_SUCCESS, payload: data }))
    //   .catch((err) => dispatch({ type: REQUEST_CATS_FAILED, payload: err }));

    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
      type: REQUEST_CATS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REQUEST_CATS_FAILED,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateSearch = (text) => (dispatch) => {
  try {
    dispatch({ type: CHANGE_SEARCH_FIELD, payload: text });
  } catch (err) {
    console.log(err);
  }
};
