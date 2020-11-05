import { ACTION_TYPES } from './../actions/produtos';

const initialState = {
  list: [],
}

export const produtos = (state = initialState, action ) => {
  switch (action.type) {
    case ACTION_TYPES.GET:
      return {
        ...state,
        list: [...action.payload]
      }
    case ACTION_TYPES.POST:
      return {
        ...state,
        list: [...state.list, action.payload]
      }
  case ACTION_TYPES.PUT:
        return {
          ...state,
          list: state.list.map(x => x.id === action.payload.id ? action.payload : x)
        }
    case ACTION_TYPES.DELETE:
        return {
          ...state,
          list: state.list.filter(x => x.id !== action.payload)
        }
    default:
      return state;
  }
}