import { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import { UserContextType } from '../../types/context/user';
import { UserContext } from '../../context/userContext';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';

const SignUp: NextPage = () => {
    const router = useRouter();
    const [cookies, setCookie] = useCookies(['userEmail']);
    const [phone, setPhone] = useState<any | undefined>();

    const { register, handleSubmit } = useForm();

    console.log('email cookie: ', cookies.userEmail);

    const { saveJwtToken, savePhone } = useContext(UserContext) as UserContextType;

    const onSubmit = async (data: any) => {
        console.log(data);

        if (cookies.userEmail) {
            const response = await fetch(`${process.env.SEND_OTP_REGISTER}`, {
                method: 'POST',
                body: JSON.stringify({
                    phone: phone,
                    email: cookies.userEmail,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorResult = await response.json();
                alert(errorResult.error);
            } else {
                alert('Verify phone successfully. Next enter OTP.');
                router.push('/auth/otp');
            }
        } else {
            const response = await fetch(`${process.env.LOGIN_WITH_PHONE_REGISTER}`, {
                method: 'POST',
                body: JSON.stringify({
                    phone: phone,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorResult = await response.json();
                alert(errorResult.error);
            } else {
                savePhone(phone);
                alert('Register phone successfully. Next enter OTP.');
                router.push('/auth/otp');
            }
        }
    };

    return (
        <>
            <h1>Register phone page</h1>
            <section className="flex justify-center px-20">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                    <label htmlFor="phone">Phone</label>
                    <PhoneInput placeholder="Enter phone number" value={phone} onChange={(value) => setPhone(value)} />
                    <button className="py-1 text-white bg-blue-400 rounded" type="submit">
                        Submit
                    </button>
                </form>
            </section>
        </>
    );
};

export default SignUp;
