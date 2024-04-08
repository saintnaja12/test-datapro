'use client'
import React, { useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
// util
import RegxHelper from '../../../utils/RegxHelper';
// icon
import { LockKey, Eye, EyeSlash } from "@phosphor-icons/react"

const InputPassword = ({ name, inputLbl, rules, error }) => {
    const { control, formState: { errors } } = useFormContext();
    const [isFocus, setIsFocus] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const isError = errors[name];

    const handleOnChange = (value) => {
        let result = value;
        if (rules.isTextOnly) {
            result = RegxHelper.removeEmoji(result);
            // result = RegxHelper.removeSymbol(result);
        }
        if (rules.isNoSpace) {
            result = RegxHelper.removeSpace(result);
        }
        return result;
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <div>
            <div className="font-semibold pb-1 text-a-black-333333">
                {inputLbl.name}
                {inputLbl.required && <span className="ml-1 font-bold text-a-negative">*</span>}
            </div>
            <div className="relative">
                <div className={`box-shadow bg-white border flex px-4 py-3 rounded-full duration-200
                    ${isError ? 'border-a-negative' : ''}
                    ${isFocus  ? 'border-a-gray-1' : ''}
                    ${rules.isDisabled ? 'bg-white text-a-gray-3 placeholder-a-gray-3' : ''}`}
                >
                    <div className="pr-3 my-auto border-r border-a-gray-E6E6E6">
                        <LockKey className='text-18 text-a-gray-2' />
                    </div>
                    <Controller
                        name={name}
                        control={control}
                        rules={rules}
                        render={({ field }) => (
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="input-field w-full text-18 pl-3 text-a-black-333333 bg-white"
                                {...field}
                                value={field.value || ''}
                                onChange={(e) => field.onChange(handleOnChange(e.target.value))}
                                placeholder={inputLbl.placeholder}
                                maxLength={rules.maxLength}
                                disabled={rules.isDisabled}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                            />
                        )}
                    />
                    <button type="button" onClick={togglePasswordVisibility} className="my-auto">
                        {showPassword ? (
                            <Eye className='text-18 text-a-gray-2' />
                        ) : (
                            <EyeSlash className='text-18 text-a-gray-2' />
                        )}
                    </button>
                </div>
                {isError && (
                    <div className="text-a-negative text-14 w-full mt-1">
                        {errors[name]?.message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InputPassword;
