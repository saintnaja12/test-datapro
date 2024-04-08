'use client'
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/navigation';
// util
import FormatDate from '../../../utils/FormatDate';

// components
import InputText from '../Input/InputText';
import InputPassword from '../Input/InputPassword';
import Button from '../Button';
import Loading from '../Loading';

export default function LoginScreen() {
    const router = useRouter();
    const methods = useForm();
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (data) => {
        const currentDate = FormatDate(new Date());
        if (data.username === 'test' && data.password === currentDate) {
            setIsLoading(true)
            localStorage.setItem('formData', JSON.stringify(data));
            router.push('/catalog');
        } else {
            setIsLoading(false)
            methods.setError('username', {
                type: 'manual',
                message: 'Incorrect username',
            });
            methods.setError('password', {
                type: 'manual',
                message: 'Incorrect password',
            });
        }
    };

    return (
        <div className="flex flex-1 flex-col justify-center px-4 min-h-full w-full max-w-500px duration-200">
            <Loading isShowing={isLoading} />
            <div className='bg-white p-5 rounded-10 box-shadow'>
                <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-a-black-333333">
                    Shopping App
                </h2>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-5 space-y-6">
                        <InputText
                            name="username"
                            inputLbl={{ name: 'Username', placeholder: 'Enter username', required: true }}
                            rules={{ required: 'This field is required', maxLength: 20, isTextOnly: true, isNoSpace: true }}
                        />
                        <InputPassword
                            name="password"
                            inputLbl={{ name: 'Password', placeholder: 'Enter password', required: true }}
                            rules={{ required: 'This field is required', maxLength: 8, isTextOnly: true, isNoSpace: true }}
                        />
                        <Button
                            active={true}
                            isDisabled={false}
                        >
                            Sign in
                        </Button>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
}
