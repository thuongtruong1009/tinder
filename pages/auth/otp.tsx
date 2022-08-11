import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useCookies } from 'react-cookie';
import { UserContextType } from '../../types/context/user';
import { UserContext } from '../../context/userContext';
import { useForm } from 'react-hook-form';

const OTP: NextPage = () => {
    const router = useRouter();
    const [cookies, setCookie] = useCookies(['userEmail']);
    const { register, handleSubmit } = useForm();
    console.log('email cookie: ', cookies.userEmail);

    const { phone, userSignUp, saveJwtToken } = useContext(UserContext) as UserContextType;
    console.log('phone: ', phone);

    const onSubmit = async (data: any) => {
        console.log(data);

        let body = {};
        if (phone) {
            body = {
                phone,
            };
        } else if (cookies.userEmail) {
            body = {
                email: cookies.userEmail,
            };
        }

        const response = await fetch(`${process.env.VERIFY_OTP_LOGIN}`, {
            method: 'POST',
            body: JSON.stringify({
                ...body,
                otp: data.otp,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const result = await response.json();
        if (!response.ok) {
            alert(result.error);
        } else {
            console.log(result);
            saveJwtToken(result.data.token);
            router.push('/');
        }
    };

    return (
        <>
            <h1>OTP page</h1>
            <section className="flex justify-center px-20">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                    <label htmlFor="otp">OTP</label>
                    <input
                        type="text"
                        className="mb-3 border rounded"
                        {...register('otp', { required: true, maxLength: 6, minLength: 6 })}
                    />
                    <button className="py-1 text-white bg-blue-400 rounded" type="submit">
                        Submit
                    </button>
                </form>
            </section>
        </>
    );
};

export default OTP;
