import * as React from 'react';
import { UserContextType, IUserSignUp } from '../types/context/user';

export const UserContext = React.createContext<UserContextType | null>(null);

type ReactProps = {
    children: React.ReactNode;
};

const UserProvider: React.FC<ReactProps> = ({ children }) => {
    const [userSignUp, setUserSingUp] = React.useState<IUserSignUp>({
        name: '',
        email: '',
        avatar: '',
    });

    const saveUserSignUp = (user: IUserSignUp) => {
        setUserSingUp(user);
    };

    const [phone, setPhone] = React.useState<string>('');
    const savePhone = (phone: string) => {
        setPhone(phone);
    };

    const [email, setEmail] = React.useState<string>('');
    const saveEmail = (email: string) => {
        setEmail(email);
    };

    const [jwtToken, setJwtToken] = React.useState<string>('');
    const saveJwtToken = (jwtToken: string) => {
        setJwtToken(jwtToken);
    };

    const [error, setError] = React.useState<string>('');
    const saveError = (error: string) => {
        setError(error);
    };

    return (
        <UserContext.Provider
            value={{
                userSignUp,
                phone,
                jwtToken,
                email,
                error,
                saveUserSignUp,
                savePhone,
                saveJwtToken,
                saveEmail,
                saveError,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
