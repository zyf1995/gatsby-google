export default function countReducer (state = {count: 1}, action) {
  switch (action.type) {
    case 'increment': {
      return {
        count: state.count + 1
      }
    }
    default: {
      return state
    } 
  }
}