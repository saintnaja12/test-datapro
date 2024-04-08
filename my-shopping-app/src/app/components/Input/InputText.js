'use client'
import React, { useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
// util
import RegxHelper from '../../../utils/RegxHelper';
// icon
import { User } from "@phosphor-icons/react"

const InputText = ({ name, inputLbl, rules, error }) => {
    const { control, formState: { errors } } = useFormContext();
    const [isFocus, setIsFocus] = useState(false);
    const isError = errors[name];

    // Handling changes and validations
    const handleOnChange = (value) => {
        let result = value;
        if (rules.isTextOnly) {
            result = RegxHelper.removeEmoji(result);
            result = RegxHelper.removeSymbol(result);
        }
        if (rules.isNoSpace) {
            result = RegxHelper.removeSpace(result);
        }
        return result;
    };

    return (
        <div>
            <div className="font-semibold pb-1 text-a-black-333333">
                {inputLbl.name}
                {inputLbl.required && <span className="ml-1 font-bold text-a-negative">*</span>}
            </div>
            <div className="relative">
                <div className={`box-shadow border placeholder-a-gray-b3b3b3 flex px-4 py-3 rounded-full duration-200 bg-white
                    ${isError ? 'border-a-negative' : ''}
                    ${isFocus  ? 'border-a-gray-1' : ''}
                    ${rules.isDisabled ? 'bg-white text-a-gray-3 placeholder-a-gray-3' : ''}`}
                >
                <div className="pr-3 my-auto border-r border-a-gray-E6E6E6">
                    <User className='text-18 text-a-gray-2' />
                </div>
                <Controller
                    name={name}
                    control={control}
                    rules={rules}
                    render={({ field }) => (
                        <input
                            type="text"
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

export default InputText;
