const initValue = []

export default function shortcutReducer (state = initValue, action) {
  switch (action.type) {
    case "addShortcut": 
      return [...state, action.payload]
      
    case "saveShortcut": 
      return []

    default: 
      return state
  }
}