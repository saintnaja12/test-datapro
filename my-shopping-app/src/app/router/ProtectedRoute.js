'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    const [isPass, setIsPass] = useState(false)
    useEffect(() => {
        const data = localStorage.getItem('formData');

        if (!data) {
            router.replace('/');
        }else {
            setIsPass(true)
        }
    }, [router]);

    return (
        <>
            {isPass ? children : null}
        </>
    );
};

export default ProtectedRoute;
