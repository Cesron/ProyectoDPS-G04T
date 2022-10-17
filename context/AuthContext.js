import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [logged, setLogged] = useState(false);
	return (
		<AuthContext.Provider value={{ logged, setLogged }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};
