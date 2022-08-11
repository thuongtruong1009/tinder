import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <Html lang="vi">
            <Head>{/* <script src="https://unpkg.com/flowbite@1.5.2/dist/datepicker.js" async></script> */}</Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
