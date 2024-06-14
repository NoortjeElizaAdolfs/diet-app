import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { navigateWithTimeOut } from '../Pages/helpers/Navigate';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {

    const [user, setAuth] = useState({
        username: null,
        status: 'pending'
    });

    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            const token = localStorage.getItem('token');
            if (token && isTokenValid(token)) {
                try {
                    const noviURL = import.meta.env.VITE_NOVI_URL;
                    const result = await axios.get(`${noviURL}/api/user`,
                        {
                            headers: {
                                "Content-Type": 'application/json',
                                "Authorization": `Bearer ${token}`
                            }
                        });
                    setAuth(prevUser => ({
                        ...prevUser,
                        username: result.data?.username,
                        status: 'done',
                    }));
                } catch (e) {
                    setAuth((prevUser) => ({
                        ...prevUser,
                        username: null,
                        status: 'done',
                    }));
                }
            }
            else {
                setAuth({
                    username: null,
                    status: 'done',
                });
            }
        }

        getUser();
    }, []);

    function isTokenValid(token) {
        const decodedToken = jwtDecode(token);
        return decodedToken?.exp > (new Date().getTime() / 1000) || false;
    }


    function login(userInput) {
        setAuth(
            {
                ...user,
                username: userInput.username,
                status: 'done'
            });
        localStorage.setItem('token', userInput.accessToken);
        navigateWithTimeOut('/account', navigate);
    }

    function logout() {
        setAuth(
            {
                ...user,
                username: null,
                status: 'done'
            });

        localStorage.removeItem('token');
        navigateWithTimeOut('/account', navigate);
    }

    const userData = {
        user: user,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={userData}>
            {user.status === 'pending'
                ? <p>aan het laden...</p>
                : children
            }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;