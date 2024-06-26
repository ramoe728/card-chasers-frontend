import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { doSignOut, doSendEmailVerification } from "../../firebase/auth";

const VerifyEmail = () => {
    const [notification, setNotification] = useState(null);
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        if (notification) {
            setTimeout(() => {
                setNotification(null);
            }, 5000);
        }
    }, [notification])

    const handleResendEmail = async () => {
        try {
            await doSendEmailVerification();
            setNotification('Email sent!');
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    const handleGoToLogin = async () => {
        await doSignOut();
        navigate('/login');
    }

    return (
        <div>
            <main className="w-full h-screen flex self-center place-content-center place-items-center">
                <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="text-center">
                        <div className="mt-2">
                            <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Please Verify Your Email</h3>
                        </div>
                    </div>

                    <button
                        onClick={handleResendEmail}
                        disabled={notification}
                        className={`w-full px-4 py-2 text-white font-medium rounded-lg ${notification ? 'text-black bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}>
                        {notification ? 'Email Sent!' : 'Resend Email'}
                    </button>
                    <button onClick={handleGoToLogin} className='w-full px-4 py-2 text-white font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'>
                        Go To Login
                    </button>
                    {errorMessage && (
                        <span className='text-red-600 font-bold'>{errorMessage}</span>
                    )}

                </div>
            </main>
        </div>
    )
}

export default VerifyEmail;