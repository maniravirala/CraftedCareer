import { useState } from "react";
import Links from "../assets/links";
import { message } from "antd";
import { useAuth } from "../contexts/authContext/AuthContext";
import axios from "axios";

const AuthService = () => {
    const { SignIn, SignOut } = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const registerUser = async (values) => {
        if (values.password !== values.confirmPassword) {
            setError('Passwords are not the same');
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const response = await axios.post(Links.API.REGISTER, values, {
                withCredentials: true,
            });
            if (response.status === 201) {
                message.success(response.data.message);
                SignIn(response.data.token)

            } else {
                message.error("Registration Failed");
            }
        } catch (error) {
            // message.error(error.message);
            if (error.response && error.response.status === 429) {
                message.error(error.response.data.error);
            } else if (error.response && error.response.status === 400) {
                setError(error.response.data.message);
            } else {
                message.error(error.message);
            }

        } finally {
            setLoading(false);
        }
    };

    const loginUser = async (values) => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.post(Links.API.LOGIN, values, {
                withCredentials: true,
            });
            if (response.status === 200) {
                message.success('Login successful');
                SignIn(response.data.token);
            }
            else {
                message.error("Login Failed");
            }
        } catch (error) {
            // message.error('An error occurred while logging in');
            if (error.response && error.response.status === 429) {
                message.error(error.response.data.error);
            } else if (error.response && error.response.status === 401) {
                setError(error.response.data.message);
            } else {
                message.error(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const logoutUser = async () => {
        try {
            setLoading(true);
            setError(null);
            // send cookies to the server
            const response = await axios.post(Links.API.LOGOUT, {}, {
                withCredentials: true,
            });

            if (response.status === 200) {
                message.success('Logout successful');
                SignOut();
            }
            else {
                message.error("Logout Failed");
            }
        } catch (error) {
            // message.error('An error occurred while logging out');
            if (error.response && error.response.status === 429) {
                message.error(error.response.data.error);
            } else {
                message.error(error.message);
            }
        } finally {
            setLoading(false);
        }
    }

    return { registerUser, loginUser, logoutUser, error, loading };
};

export default AuthService;
