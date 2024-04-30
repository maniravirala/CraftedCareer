import { useState } from "react";
import Links from "../assets/links";
import { useAuth } from "../contexts/authContext/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const AuthService = () => {
    const { SignIn, SignOut } = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const registerUser = async (values) => {
        if (values.password !== values.confirmPassword) {
            setError('Passwords are not the same');
            return;
        }
        const toastRegisterLoading = toast.loading("Registering...");
        try {
            setLoading(true);
            setError(null);
            const response = await axios.post(Links.API.REGISTER, values, {
                withCredentials: true,
            });
            if (response.status === 201) {
                toast.dismiss(toastRegisterLoading.id);
                toast.success(response.data.message);
                SignIn(response.data.token)

            } else {
                toast.dismiss(toastRegisterLoading.id);
                toast.error("Registration Failed");
            }
        } catch (error) {
            toast.dismiss(toastRegisterLoading.id);
            if (error.response && error.response.status === 429) {
                toast.error(error.response.data.error);
            } else if (error.response && error.response.status === 400) {
                setError(error.response.data.message);
            } else {
                toast.error(error.message);
            }

        } finally {
            setLoading(false);
        }
    };

    const loginUser = async (values) => {
        const toastLoginLoading = toast.loading("Logging in...");
        try {
            setLoading(true);
            setError(null);
            const response = await axios.post(Links.API.LOGIN, values, {
                withCredentials: true,
            });
            if (response.status === 200) {
                toast.dismiss(toastLoginLoading.id);
                toast.success('Login successful');
                SignIn(response.data.token);
            }
            else {
                toast.dismiss(toastLoginLoading.id);
                toast.error("Login Failed");
            }
        } catch (error) {
            // toast.error('An error occurred while logging in');
            toast.dismiss(toastLoginLoading.id);
            if (error.response && error.response.status === 429) {
                toast.error(error.response.data.error);
            } else if (error.response && error.response.status === 401) {
                setError(error.response.data.message);
            } else {
                toast.error(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const logoutUser = async () => {
        const toastLogoutLoading = toast.loading("Logging out...");
        try {
            setLoading(true);
            setError(null);
            // send cookies to the server
            const response = await axios.post(Links.API.LOGOUT, {}, {
                withCredentials: true,
            });

            if (response.status === 200) {
                toast.dismiss(toastLogoutLoading.id);
                toast.success('Logout successful');
                SignOut();
            }
            else {
                toast.dismiss(toastLogoutLoading.id);
                toast.error("Logout Failed");
            }
        } catch (error) {
            // toast.error('An error occurred while logging out');
            toast.dismiss(toastLogoutLoading.id);
            if (error.response && error.response.status === 429) {
                toast.error(error.response.data.error);
            } else {
                toast.error(error.message);
            }
        } finally {
            setLoading(false);
        }
    }

    return { registerUser, loginUser, logoutUser, error, loading };
};

export default AuthService;
