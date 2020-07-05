import { TAG } from '../actions/AuthActions';

const initialState = {
  token: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {

    case TAG.LOADING:
      return {
        loading: true
      };

    case TAG.IN:
      return {
        ...state,
        token: action.token,
        loading: false
      };

    case TAG.UP:
      return initialState;

    case TAG.OUT:
      return initialState;

    case TAG.FAIL:
      return initialState;

    default:
      return state;
  }
}