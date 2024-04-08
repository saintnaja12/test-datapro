'use client'

import React from 'react';

const Button = ({ onClick, customClass = null, active = true, isDisabled = false, children }) => {

    const btnClass = () => {
        if (customClass != null) {
            return customClass;
        }
        if(isDisabled){
            return 'font-semibold py-1 px-3 w-full rounded-full h-12 text-lg bg-a-gray-2 text-a-gray-3';
        }
        if (active) {
            return 'font-semibold py-1 px-3 w-full rounded-full h-12 text-lg text-white bg-a-primary-ee361f hover:bg-a-primary-ff6653 duration-200';
        } else {
            return 'font-semibold py-1 px-3 w-full rounded-full h-12 text-lg text-a-black-333333 bg-white border-a-primary-ee361f hover:border-a-primary-ff6653 duration-200';
        }
    };

    return (
        <button
            onClick={onClick}
            className={`${btnClass()}`}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
};

export default Button;
