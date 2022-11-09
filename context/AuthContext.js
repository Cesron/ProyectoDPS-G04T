import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [logged, setLogged] = useState(false);
	const [productView, setProductView] = useState(null);

	return (
		<AuthContext.Provider
			value={{ logged, productView, setLogged, setProductView }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};
