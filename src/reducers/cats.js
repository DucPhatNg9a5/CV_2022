import {
  REQUEST_CATS_PENDING,
  REQUEST_CATS_SUCCESS,
  REQUEST_CATS_FAILED,
  CHANGE_SEARCH_FIELD,
} from "../actions/types";

const initialState = {
  isPending: false,
  catsList: [],
  search: "",
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_CATS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_CATS_SUCCESS:
      return { ...state, catsList: action.payload, isPending: false };
    case REQUEST_CATS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    case CHANGE_SEARCH_FIELD:
      return { ...state, search: action.payload };
    default:
      return state;
  }
}
