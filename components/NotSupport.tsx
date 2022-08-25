import Image from 'next/image';
import { useRouter } from 'next/router';
import APP_PATH from '../constant/appPath';

interface Props {}

export default function NotSupport(props: Props) {
    return (
        <div className="max-w-3xl min-h-screen mx-auto flex-col-center">
            <p className="py-2 text-xl font-bold text-center">Thiết bị của bạn không hỗ trợ ứng dụng này</p>
            <div className="image-container w-full h-[400px] select-none pointer-events-none">
                <Image
                    src="/assets/images/not-support.png"
                    alt="not-support-device"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </div>
    );
}
