import React, { createContext, useContext, useReducer } from 'react';
import { key as darkModeKey, reducer as darkModeReducer, selectIsDarkMode, setIsDarkMode, defaultState as darkModeDefaultState } from './darkMode';

const defaultGlobalState = {
	...darkModeDefaultState
};

const rootReducer = (prevState, action) => ({
	[darkModeKey]: darkModeReducer(prevState[darkModeKey], action)
});

const GlobalContext = createContext();

const ContextProvider = ({ initialState, children, ...x }) => {
	const globalState = initialState ?? { ...defaultGlobalState, [darkModeKey]: false }; //typeof window !== `undefined` ? (window && window.matchMedia("(prefers-color-scheme: dark)").matches) : false}
	return <GlobalContext.Provider value={useReducer(rootReducer, globalState)}>{children}</GlobalContext.Provider>;
};

export const useGlobalState = () => useContext(GlobalContext);

export const useDarkMode = () => {
	const [state, dispatch] = useContext(GlobalContext);
	return [selectIsDarkMode(state), setIsDarkMode(dispatch)];
};

export default ContextProvider;
