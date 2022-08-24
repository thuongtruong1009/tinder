import Image from 'next/image';
import { useRouter } from 'next/router';
import { memo } from 'react';
import { Toast } from 'react-hot-toast';
import APP_PATH from '../constant/appPath';
import { generateFullName } from '../utils/name';

interface Props {
    t: Toast;
    data: any;
}

function ToastMessage({ t, data }: Props) {
    const router = useRouter();
    return (
        <div
            className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-[345px] w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            onClick={() => {
                router.push(APP_PATH.CHAT + '/' + data.conversationId);
            }}
        >
            <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                        <div className="object-cover w-10 h-10 rounded-md image-container">
                            <Image className="image" alt="avatar" src={data.message.senderId.avatar} layout="fill" />
                        </div>
                    </div>
                    <div className="flex-1 ml-3">
                        <p className="text-sm font-medium text-gray-900">
                            {generateFullName(data.message.senderId.name)}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                            {data.message.messages[0].type === 'text' ? data.message.messages[0].value : 'Đã gửi ảnh'}
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="flex border-l border-gray-200">
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="flex items-center justify-center w-full p-4 text-sm font-medium text-indigo-600 border border-transparent rounded-none rounded-r-lg hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Close
                </button>
            </div> */}
        </div>
    );
}
export default memo(ToastMessage);
