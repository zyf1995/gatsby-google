const initValue = {
  shortcutList: []
}

export default function shortcutReducer (state = initValue, action) {
  switch (action.type) {
    case "addShortcut": {
      return [...state.shortcutList, action.payload]
    }
    default: {
      return state
    }
  }
}