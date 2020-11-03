import { ACTION_TYPES } from './../actions/produtos';

const initialState = {
  list: []
}

export const produtos = (state = initialState, action ) => {
  switch (action.type) {
    case ACTION_TYPES.GET:
      return {
        ...state,
        payload: [...action.payload]
      }
    default:
      return state;
  }
}