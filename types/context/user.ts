export interface IUserSignUp {
    name: string;
    email: string;
    avatar: string;
}

export type UserContextType = {
    userSignUp: IUserSignUp;
    phone: string;
    email: string;
    jwtToken: string;
    error: string;
    saveUserSignUp: (userSignUp: IUserSignUp) => void;
    savePhone: (phone: string) => void;
    saveJwtToken: (jwtToken: string) => void;
    saveEmail: (email: string) => void;
    saveError: (error: string) => void;
};
