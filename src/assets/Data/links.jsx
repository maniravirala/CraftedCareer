const Links = {
  API: {
    GENERATE_PDF: `/api/auth/generate`,
    SEND_PDF: `/api/auth/sendPdf`,
    SEND_INVITAION: `/api/mail/send-invitation`,

    LOGIN: `/api/auth/login`,
    REGISTER: `/api/auth/register`,
    LOGOUT: `/api/auth/logout`,
    FORGOT_PASSWORD: `/api/auth/forgot-password`,
    RESET_PASSWORD: `/api/auth/reset-password/:token`,

    UPDATE_PROFILE: `/api/profile/update/:userId`,
    GET_PROFILE: `/api/profile/get/:userId`,
    DELETE_PROFILE: `/api/profile/delete/:userId`,
    REFER_DETAILS: `/api/refer/details`,
  },
};

export default Links;
