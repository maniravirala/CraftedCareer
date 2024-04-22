import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useDarkMode } from "../../contexts/Theme/DarkModeContext"; 

const navigation = [
  { name: "Dashboard", to: "/dashboard", current: true },
  { name: "Resume", to: "/resume", current: false },
  { name: "Download", to: "/download", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();
  // const { userLoggedIn } = useAuth();

  return (
    // <Disclosure
    //   as="nav"
    //   className="bg-background dark:bg-background-dark z-[1] relative shadow-lg dark:shadow-[rgba(255,255,255,0.03)]"
    // >
    //   {({ open }) => (
    //     <>
    //       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    //         <div className="relative flex h-16 items-center justify-between">
    //           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //             {/* Mobile menu button*/}
    //             <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 dark:text-tertiary text-tertiary-dark hover:text-background-dark dark:hover:text-white focus:outline-none">
    //               <span className="absolute -inset-0.5" />
    //               <span className="sr-only">Open main menu</span>
    //               {open ? (
    //                 <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
    //               ) : (
    //                 <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
    //               )}
    //             </Disclosure.Button>
    //           </div>
    //           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //             <div className="flex flex-shrink-0 items-center">
    //               <img
    //                 className="h-8 w-auto"
    //                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
    //                 alt="Your Company"
    //               />
    //             </div>
    //             <div className="hidden sm:ml-6 sm:block">
    //               <div className="flex space-x-4">
    //                 {navigation.map((item) => (
    //                   <Link
    //                     key={item.name}
    //                     to={item.to}
    //                     className={classNames(
    //                       item.current
    //                         ? "bg-primary text-white"
    //                         : "hover:bg-tertiary  text-background-dark dark:text-white dark:hover:bg-tertiary-dark",
    //                       "rounded-md px-3 py-2 text-sm font-medium"
    //                     )}
    //                     aria-current={item.current ? "page" : undefined}
    //                   >
    //                     {item.name}
    //                   </Link>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    //             <div className="flex gap-4">
    //               {/* Theme switcher */}
    //               <button
    //                 type="button"
    //                 className="relative rounded-full p-1 dark:text-tertiary text-tertiary-dark hover:text-background-dark dark:hover:text-white focus:outline-none"
    //                 onClick={() => toggleDarkMode()}
    //               >
    //                 <span className="absolute -inset-1.5" />
    //                 <span className="sr-only">Switch theme</span>
    //                 {darkMode ? (
    //                   <SunIcon className="h-6 w-6" aria-hidden="true" />
    //                 ) : (
    //                   <MoonIcon className="h-6 w-6" aria-hidden="true" />
    //                 )}
    //               </button>
    //               {/* Notification button */}
    //               <button
    //                 type="button"
    //                 className="relative rounded-full  p-1 dark:text-tertiary text-tertiary-dark hover:text-background-dark dark:hover:text-white focus:outline-none "
    //               >
    //                 <span className="absolute -inset-1.5" />
    //                 <span className="sr-only">View notifications</span>
    //                 <BellIcon className="h-6 w-6" aria-hidden="true" />
    //               </button>
    //             </div>

    //             {/* Profile dropdown */}
    //             <Menu as="div" className="relative ml-3">
    //               <div>
    //                 <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none ">
    //                   <span className="absolute -inset-1.5" />
    //                   <span className="sr-only">Open user menu</span>
    //                   <img
    //                     className="h-8 w-8 rounded-full"
    //                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    //                     alt=""
    //                   />
    //                 </Menu.Button>
    //               </div>
    //               <Transition
    //                 as={Fragment}
    //                 enter="transition ease-out duration-100"
    //                 enterFrom="transform opacity-0 scale-95"
    //                 enterTo="transform opacity-100 scale-100"
    //                 leave="transition ease-in duration-75"
    //                 leaveFrom="transform opacity-100 scale-100"
    //                 leaveTo="transform opacity-0 scale-95"
    //               >
    //                 <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md text-background-dark dark:text-white bg-background dark:bg-background-dark py-1 shadow-lg dark:shadow-[rgba(255,255,255,0.03)] focus:outline-none">
    //                   <Menu.Item>
    //                     {({ active }) => (
    //                       <Link
    //                         to="/profile"
    //                         className={classNames(
    //                           active ? "bg-tertiary dark:bg-tertiary-dark" : "",
    //                           "block px-4 py-2 text-sm "
    //                         )}
    //                       >
    //                         Your Profile
    //                       </Link>
    //                     )}
    //                   </Menu.Item>
    //                   <Menu.Item>
    //                     {({ active }) => (
    //                       <Link
    //                         to="/settings"
    //                         className={classNames(
    //                           active ? "bg-tertiary dark:bg-tertiary-dark" : "",
    //                           "block px-4 py-2 text-sm"
    //                         )}
    //                       >
    //                         Settings
    //                       </Link>
    //                     )}
    //                   </Menu.Item>
    //                   {/* {userLoggedIn ? (
    //                     <Menu.Item>
    //                       {({ active }) => (
    //                         <Link
    //                           onClick={() => {
    //                             doSignOut();
    //                             navigate("/login");
    //                           }}
    //                           className={classNames(
    //                             active
    //                               ? "bg-tertiary dark:bg-tertiary-dark"
    //                               : "",
    //                             "block px-4 py-2 text-sm "
    //                           )}
    //                         >
    //                           Sign out
    //                         </Link>
    //                       )}
    //                     </Menu.Item>
    //                   ) : (
    //                     <Menu.Item>
    //                       {({ active }) => (
    //                         <Link
    //                           to="/login"
    //                           className={classNames(
    //                             active
    //                               ? "bg-tertiary dark:bg-tertiary-dark"
    //                               : "",
    //                             "block px-4 py-2 text-sm "
    //                           )}
    //                         >
    //                           Sign in
    //                         </Link>
    //                       )}
    //                     </Menu.Item>
    //                   )} */}
    //                 </Menu.Items>
    //               </Transition>
    //             </Menu>
    //           </div>
    //         </div>
    //       </div>

    //       <Disclosure.Panel className="sm:hidden">
    //         <div className="space-y-1 px-2 pb-3 pt-2 absolute bg-background dark:bg-background-dark w-full">
    //           {navigation.map((item) => (
    //             <Link
    //               key={item.name}
    //               as="a"
    //               to={item.to}
    //               className={classNames(
    //                 item.current
    //                   ? "bg-primary text-white"
    //                   : "hover:bg-tertiary  text-background-dark dark:text-white dark:hover:bg-tertiary-dark",
    //                 "block rounded-md px-3 py-2 text-base font-medium"
    //               )}
    //               aria-current={item.current ? "page" : undefined}
    //             >
    //               {item.name}
    //             </Link>
    //           ))}
    //         </div>
    //       </Disclosure.Panel>
    //     </>
    //   )}
    // </Disclosure>
    Header
  );
}
