declare interface ILoginWithPhone {
    phone: string;
}
declare interface ISendOTPRegister {
    phone: string;
    email: string;
}
declare interface IVerifyOTP {
    otp: string;
    email?: string;
    phone?: string;
}
declare interface IVerifyOTPResponse extends IResponseSuccess {
    data: {
        token: string;
        user: IUser;
    };
}
