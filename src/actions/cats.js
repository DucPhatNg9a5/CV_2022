import {
  REQUEST_CATS_PENDING,
  REQUEST_CATS_SUCCESS,
  REQUEST_CATS_FAILED,
  CHANGE_SEARCH_FIELD,
} from "../actions/types";

export const requestCats = () => async (dispatch) => {
  dispatch({ type: REQUEST_CATS_PENDING });
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => dispatch({ type: REQUEST_CATS_SUCCESS, payload: data }))
    .catch((err) => dispatch({ type: REQUEST_CATS_FAILED, payload: err }));
};

export const updateSearch = (text) => (dispatch) => {
  try {
    dispatch({ type: CHANGE_SEARCH_FIELD, payload: text });
  } catch (err) {
    console.log(err);
  }
};
