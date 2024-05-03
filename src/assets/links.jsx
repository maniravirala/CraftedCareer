const link1 = "https://craftedcareer.vercel.app";
const link2 = "http://localhost:8000";
const link = process.env.NODE_ENV === "production" ? link1 : link2;

const Links = {
  API: {
    GENERATE_PDF: `${link}/api/auth/generate`,
    SEND_PDF: `${link}/api/auth/sendPdf`,
    SEND_INVITAION: `${link}/api/mail/send-invitation`,

    LOGIN: `${link}/api/auth/login`,
    REGISTER: `${link}/api/auth/register`,
    LOGOUT: `${link}/api/auth/logout`,
    FORGOT_PASSWORD: `${link}/api/auth/forgot-password`,
    RESET_PASSWORD: `${link}/api/auth/reset-password/:token`,

    UPDATE_PROFILE: `${link}/api/profile/update/:userId`,
    GET_PROFILE: `${link}/api/profile/get/:userId`,
    DELETE_PROFILE: `${link}/api/profile/delete/:userId`,
    REFER_DETAILS: `${link}/api/refer/details`,
  },
  ROUTE: {
    HOME: "/home",
    ABOUT: "/about",
    // Add more other links as needed
  },
};

export default Links;
