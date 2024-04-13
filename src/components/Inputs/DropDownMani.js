import React, { useState, useEffect, useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const DropDownMani = ({ className, handleChange, index, value, options, optionsClassName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleItemClick = (newValue) => {
        handleChange(newValue, index);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="relative h-full text-background-dark dark:text-gray-300 shadow-[0_4px_10px_rgba(0,0,0,0.03)]" ref={dropdownRef}>
            <button
                className={`w-full h-full flex items-center justify-between py-2 px-4 rounded-lg focus:outline-none ${className} bg-white dark:bg-slate-700`}
                onClick={toggleDropdown}
            >
                {value}
                <FaAngleDown className="ml-1" />
            </button>
            {isOpen && (
                <div className="absolute z-20 mt-1 w-full rounded-lg shadow-lg bg-white dark:bg-slate-700">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => handleItemClick(option.label)}
                            className={`block w-full text-left px-4 py-2 rounded-lg hover:bg-tertiary dark:hover:bg-secondary-dark ${optionsClassName}`}

                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropDownMani;
