const initialState = {
  errors: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        errors: action.payload
      };
    case 'REMOVE_ERROR':
      return {
        errors: []
      };
    default:
      return state;
  }
}
