import {DECREMENT, INCREMENT} from '../actions/actionType';

let initialState = {
  count: 0,
};
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
}
export default counterReducer;
