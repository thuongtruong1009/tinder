/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        API_URL: process.env.API_URL,
        URL_LOGIN_WITH_GOOGLE: process.env.API_URL + process.env.URL_LOGIN_WITH_GOOGLE,
        URL_LOGIN_WITH_FACEBOOK: process.env.API_URL + process.env.URL_LOGIN_WITH_FACEBOOK,
        LOGIN_WITH_PHONE_LOGIN: process.env.API_URL + process.env.LOGIN_WITH_PHONE_LOGIN,
        LOGIN_WITH_PHONE_REGISTER: process.env.API_URL + process.env.LOGIN_WITH_PHONE_REGISTER,
        SEND_OTP_REGISTER: process.env.API_URL + process.env.SEND_OTP_REGISTER,
        VERIFY_OTP_LOGIN: process.env.API_URL + process.env.VERIFY_OTP_LOGIN,
    },
};

module.exports = nextConfig;
