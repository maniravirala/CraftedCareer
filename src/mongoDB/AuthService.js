import { useState } from "react";
import Links from "../assets/links";
import { message } from "antd";
import { useAuth } from "../contexts/authContext/AuthContext";

const AuthService = () => {
    const { SignIn } = useAuth();
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
            const response = await fetch(Links.API.REGISTER, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });
            const data = await response.json();
            if (response.status === 201) {
                message.success(data.message);
                SignIn(data.token, data.user);
            } else if (response.status === 400) {
                setError(data.message);
            } else {
                message.error("Registration Failed");
            }
        } catch (error) {
            message.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const loginUser = async (values) => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(Links.API.LOGIN, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });
            const data = await response.json();
            if (response.status === 200) {
                message.success('Login successful');
                SignIn(data.token, data.user);
            } else if (response.status === 401) {
                setError(data.message);
            }
            else{
                message.error("Login Failed");
            }
        } catch (error) {
            message.error('An error occurred while logging in');
        } finally {
            setLoading(false);
        }
    };

    return { registerUser, loginUser, error, loading };
};

export default AuthService;
