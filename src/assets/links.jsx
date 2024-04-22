const Links = {
    API: {
        REQUEST_PDF: 'https://api.tailwindstream.io/request',
        RETRY_PDF: 'https://api.tailwindstream.io/request/:requestId/download',
        GENERATE_PDF: 'http://localhost:8000/api/auth/generate',
        LOGIN: 'http://localhost:8000/api/auth/login',
        REGISTER: 'http://localhost:8000/api/auth/register',
        UPDATE_PROFILE: 'http://localhost:8000/api/profile/update/:userId',
        GET_PROFILE: 'http://localhost:8000/api/profile/get/:userId',
        DELETE_PROFILE: 'http://localhost:8000/api/profile/delete/:userId',
    },
    ROUTE: {
        HOME: '/home',
        ABOUT: '/about',
        // Add more other links as needed
    },
};

export default Links;