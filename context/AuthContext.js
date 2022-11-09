import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [logged, setLogged] = useState(false);
	const [productView, setProductView] = useState(null);
	const [car, setCar] = useState([]);

	return (
		<AuthContext.Provider
			value={{ logged, productView, car, setLogged, setProductView, setCar }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};
