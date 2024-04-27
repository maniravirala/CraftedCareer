const link1 = "https://craftedcareer.vercel.app";
const link2 = "http://localhost:8000";
const link = link2;

const Links = {
  API: {
    GENERATE_PDF: `${link}/api/auth/generate`,
    LOGIN: `${link}/api/auth/login`,
    REGISTER: `${link}/api/auth/register`,
    UPDATE_PROFILE: `${link}/api/profile/update/:userId`,
    GET_PROFILE: `${link}/api/profile/get/:userId`,
    DELETE_PROFILE: `${link}/api/profile/delete/:userId`,
    REFER_DETAILS:
      "https://run.mocky.io/v3/b0166856-e070-445d-9649-847f9c28721e",
  },
  ROUTE: {
    HOME: "/home",
    ABOUT: "/about",
    // Add more other links as needed
  },
};

export default Links;
