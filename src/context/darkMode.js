const SET_DARK_MODE = "SET_DARK_MODE"

export const key = 'isDarkMode'
export const defaultState = {[key]: false}

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_DARK_MODE:
      return action[key]
    default:
      return state
  }
}

export const selectIsDarkMode = state => state[key]
export const setIsDarkMode = dispatch => isDarkMode => dispatch({ type: SET_DARK_MODE, [key]: isDarkMode })
