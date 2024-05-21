import { useState } from "react";
import Links from "../assets/Data/links";
import { useAuth } from "../contexts/authContext/AuthContext";
import axiosInstance from "../utils/axiosInstance";
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
            axiosInstance.post(Links.API.REGISTER, values, { withCredentials: true })
                .then((response) => {
                    if (response.error) {
                        toast.dismiss(toastRegisterLoading.id);
                        toast.error(response.error);
                        return;
                    }
                    toast.dismiss(toastRegisterLoading.id);
                    toast.success('Registration successful');
                    SignIn(response.token);
                }
                )
                .catch((error) => {
                    toast.dismiss(toastRegisterLoading.id);
                    if (error.response && error.response.status === 429) {
                        toast.error(error.response.data.error);
                    } else if (error.response && error.response.status === 400) {
                        setError(error.response.data.message);
                    } else {
                        toast.error(error.message);
                    }
                });

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
            axiosInstance.post(Links.API.LOGIN, values, { withCredentials: true })
                .then((response) => {
                    if (response.error) {
                        toast.dismiss(toastLoginLoading.id);
                        toast.error(response.error);
                        return;
                    }
                    toast.dismiss(toastLoginLoading.id);
                    toast.success('Login successful');
                    SignIn(response.token);
                })
                .catch((error) => {
                    toast.dismiss(toastLoginLoading.id);
                    if (error.response && error.response.status === 429) {
                        toast.error(error.response.data.error);
                    } else if (error.response && error.response.status === 401) {
                        setError(error.response.data.message);
                    } else {
                        toast.error(error.message);
                    }
                });
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
            axiosInstance.post(`${Links.API.LOGOUT}`, {}, { withCredentials: true })
                .then((response) => {
                    if (response.error) {
                        toast.dismiss(toastLogoutLoading.id);
                        toast.error(response.error);
                        return;
                    }
                    toast.dismiss(toastLogoutLoading.id);
                    toast.success('Logout successful');
                    SignOut();
                })
                .catch((error) => {
                    toast.dismiss(toastLogoutLoading.id);
                    if (error.response && error.response.status === 429) {
                        toast.error(error.response.data.error);
                    } else {
                        toast.error(error.message);
                    }
                });
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
