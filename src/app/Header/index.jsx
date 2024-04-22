import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/AuthContext";
import ThemeToggle from "../../components/Inputs/ThemeToggle";
import { BiMenu, BiCross } from "react-icons/bi";

const navigation = [
  { name: "Dashboard", to: "/dashboard", current: true },
  { name: "Resume", to: "/resume", current: false },
  { name: "Download", to: "/download", current: false },
];

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, SignOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    await SignOut();
    // navigate("/login");
  }

  return (
    <div className="">
      {" "}
      {/*bg-background dark:bg-background-dark*/}
      <header className="mx-auto max-w-7xl ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            <div className="flex-shrink-0">
              {/* <img
                className="w-auto h-8"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                alt=""
              /> */}
              <Link to="/" className="text-2xl font-semibold text-primary">
                Craft My Resume
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10 text-background-dark dark:text-white">
              {navigation.map((item) => (
                <NavLink key={item.name} to={item.to}>
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center justify-center lg:space-x-4">
              <ThemeToggle ButtonClassName={"lg:scale-[0.9] scale-[0.8]"} />

              {isAuthenticated ? (
                <Link
                  className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-secondary font-semibold text-white bg-primary rounded-full"
                  onClick={() => {
                    SignOut()
                    navigate("/login");
                  }}
                >
                  Sign out
                </Link>
              ) : (
                <Link
                  to="/register"
                  className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-secondary font-semibold text-white bg-primary rounded-full"
                >
                  Get Started
                </Link>
              )}

              {/* Mobile menu button*/}
              <div className="flex lg:hidden">
                <button
                  className="p-2 -m-2 text-background-dark dark:text-tertiary dark:hover:text-opacity-80 hover:text-opacity-80 transition-all duration-200"
                  onClick={handleToggleMobileMenu}
                >
                  {isMobileMenuOpen ? (
                    <BiCross size={24} />
                  ) : (
                    <BiMenu size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gray-100 dark:bg-gray-800 text-background-dark dark:text-tertiary">
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navigation.map((item) => (
                <>
                  <li key={item.name} className="list-none">
                    <NavLink to={item.to} onClick={handleToggleMobileMenu}>
                      {item.name}
                    </NavLink>
                  </li>
                </>
              ))}
              {isAuthenticated ? (
                <Link
                  className="inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-secondary font-semibold text-white bg-primary rounded-full"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Sign out
                </Link>
              ) : (
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-secondary font-semibold text-white bg-primary rounded-full"
                >
                  Get Started
                </Link>
              )}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    className="text-base transition-all duration-200 hover:text-opacity-80"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
