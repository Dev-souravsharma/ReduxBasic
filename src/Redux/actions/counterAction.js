import {INCREMENT, DECREMENT} from './actionType';

export default function countChange(value) {
  return {
    type: INCREMENT,
    payload: value,
  };
}
