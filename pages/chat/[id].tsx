import { useState, useRef, useEffect, FormEvent } from 'react';
import { Popover } from '@headlessui/react';
import { NextPageWithLayout } from '../../types/global';
import { useRouter } from 'next/router';
import Title from '../../components/Home/Title';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import ThreeDotIcon from '../../components/Icons/ThreeDotIcon';
import Image from 'next/image';
import APP_PATH from '../../constant/appPath';
import dynamic from 'next/dynamic';
const Picker = dynamic(() => import('emoji-picker-react'), { ssr: false });
import PlusIcon from '../../components/Icons/PlusIcon';
import SendIcon from '../../components/Icons/SendIcon';
import IconSetIcon from '../../components/Icons/chat/IconSetIcon';
import { BsFileMusic, BsImage } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectConversation, setLastLoginById } from '../../redux/reducers/conversationSlice';
import { conversationGet, messageCreate } from '../../redux/actions/conversationActions';
import { generateFullName } from '../../utils/name';
import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';
import vi from 'timeago.js/lib/lang/vi';
import Loading from '../../components/Loading';
import { selectUser } from '../../redux/reducers/userSlice';
import { toastError } from '../../utils/toast';
import ListMessage from '../../components/Chat/ListMessage';
import { useSocket } from '../../context/SocketContext';
import ImageUploadItem from '../../components/Chat/ImageUploadItem';
import { GrClose } from 'react-icons/gr';
import { BiLoaderAlt } from 'react-icons/bi';
import { FaBan, FaUsersSlash } from 'react-icons/fa';
timeago.register('vi', vi);

const Room: NextPageWithLayout = () => {
    const [isLoading, setIsLoading] = useState(false);
    const socket = useSocket();

    const router = useRouter();
    const { id } = router.query;

    const dispatch = useAppDispatch();
    const sUser = useAppSelector(selectUser);
    const conversationInfo = useAppSelector(selectConversation).data.find(
        (conversation) => conversation.conversation._id === id,
    );

    const inputRef = useRef<HTMLInputElement>(null);
    const inputAudioRef = useRef<HTMLInputElement>(null);

    const [message, setMessage] = useState('');
    const [files, setFiles] = useState<File[]>([]);
    const [audioFile, setAudioFile] = useState<File>();
    const [isFriendOnline, setIsFriendOnline] = useState<boolean>(false);
    const [lastLogin, setLastLogin] = useState<string>('');

    const onEmojiClick = (_event: any, emojiObject: any) => {
        setMessage(message + emojiObject.emoji);
    };
    const onBack = () => {
        router.push(APP_PATH.CHAT);
    };

    const handleUpload = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };
    const handleChangeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        // check if not exist before add
        if (e.target.files) {
            let pass = true;
            if (e.target.files.length + files.length > 5) {
                pass = false;
                toastError('Bạn chỉ được upload tối đa 5 file');
            }
            const newFiles = Array.from(e.target.files);
            newFiles.forEach((file) => {
                if (!file.type.includes('image')) {
                    pass = false;
                }
            });
            if (pass) {
                setFiles([...files, ...newFiles]);
            }
        }
    };
    //* audio upload
    const handleUploadAudio = () => {
        if (inputAudioRef.current) {
            inputAudioRef.current.click();
        }
    };
    const handleChangeAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFile = e.target.files[0];
            if (!newFile.type.includes('audio')) {
                toastError('File không hợp lệ');
                return;
            }
            if (newFile.size > 10 * 1024 * 1024) {
                toastError('File không được lớn hơn 10MB');
                return;
            }
            setAudioFile(newFile);
        }
    };
    const handleClearAudio = () => {
        setAudioFile(undefined);
    };
    //* end audio upload

    const handleRemoveImageUpload = (index: number) => () => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    };
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if ((!message && !files.length && !audioFile) || isLoading) return;
        if (!message && !files.length && !audioFile) {
            toastError('Vui lòng nhập tin nhắn');
            return;
        }
        try {
            if (conversationInfo) {
                const formData = new FormData();
                let messages: IMessageItem[] = [];
                setIsLoading(true);
                if (message) {
                    messages.push({
                        value: message,
                        type: 'text',
                    });
                }

                if (audioFile) {
                    const response = await fetch(`${process.env.UPLOAD_IMAGE_URL}${audioFile.name}`, {
                        method: 'POST',
                        body: audioFile,
                    });
                    const data = await response.json();
                    messages.push({
                        value: data.longURL,
                        type: 'audio',
                    });
                }

                if (files.length) {
                    for (let image of files) {
                        formData.append('images', image);
                    }
                }
                formData.append('idReceive', conversationInfo.conversation.users[0]._id);
                formData.append('messages', JSON.stringify(messages));

                await dispatch(messageCreate(formData));
            }
        } catch (error) {
            toastError((error as IResponseError).error);
        }
        setIsLoading(false);
        setMessage('');
        setAudioFile(undefined);
        setFiles([]);
    };

    //* user actions
    const handleBlock = async () => {
        if (window.confirm('Bạn có chắc chắn muốn chặn người này?')) {
            setIsLoading(true);
            // try {
            //     const userId = conversationInfo?.conversation.users[0]._id;
            //     if (userId) {
            //         await dispatch(userBlockFriend(userId)).unwrap();
            //         toastSuccess('Bạn đã chặn thành công');
            //         router.push(APP_PATH.CHAT);
            //     } else {
            //         toastError('Có lỗi xảy ra');
            //     }
            // } catch (error) {
            //     toastError((error as IResponseError).error);
            // }
            setIsLoading(false);
        }
    };

    useEffect(() => {
        async function fetchConversation(id: string) {
            await dispatch(conversationGet({ id }));
        }
        if (id && typeof id === 'string' && !conversationInfo) {
            fetchConversation(id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    useEffect(() => {
        if (conversationInfo?.conversation) {
            !lastLogin && setLastLogin(conversationInfo.conversation.users[0].lastLogin);
            //* check if friend is online
            socket?.emit(`online`, conversationInfo.conversation.users[0]._id);
            //* listen event online
            socket?.on(`online`, (data: any) => {
                //* check status different from current status before set
                if (data.status !== isFriendOnline && data.userId === conversationInfo.conversation.users[0]._id) {
                    setIsFriendOnline(data.status);
                }
            });
            socket?.on(`online/${conversationInfo.conversation.users[0]._id}`, (data: any) => {
                //* check status different from current status before set
                //* if user is offline, set last login time
                if (!data.status) {
                    setLastLogin(data.lastLogin);
                    if (conversationInfo.conversation.users[0].lastLogin !== data.lastLogin) {
                        dispatch(
                            setLastLoginById({
                                id,
                                lastLogin: data.lastLogin,
                            }),
                        );
                    }
                }
                if (data.status !== isFriendOnline) {
                    setIsFriendOnline(data.status);
                }
            });
        }
        return () => {
            conversationInfo && socket?.off(`online/${conversationInfo.conversation.users[0]._id}`);
            socket?.off(`online`);
            setFiles([]);
            setMessage('');
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [conversationInfo, isFriendOnline]);
    if (!conversationInfo) return <Loading />;
    const classBoxChat = () => {
        let className = 'h-[calc(100vh-223px)]';
        if (files.length !== 0) {
            className = 'h-[calc(100vh-287px)]';
        }
        if (audioFile) {
            className = 'h-[calc(100vh-271px)]';
        }
        if (files.length !== 0 && audioFile) {
            className = 'h-[calc(100vh-335px)]';
        }
        return className;
    };
    return (
        <section className="container relative flex flex-col bg-white">
            <input
                multiple
                className="hidden"
                type="file"
                name="file"
                id="file"
                onChange={handleChangeUpload}
                ref={inputRef}
                accept="image/*"
            />
            <input
                multiple
                className="hidden"
                type="file"
                name="mp3_file"
                id="mp3_file"
                onChange={handleChangeAudioUpload}
                ref={inputAudioRef}
                accept="audio/*"
            />
            <Title
                className="py-0.5 flex-shrink-0"
                content={
                    <div className="justify-between flex-center-y">
                        <div className="p-2 cursor-pointer" onClick={onBack}>
                            <ArrowLeft />
                        </div>
                        <Popover className="relative">
                            <Popover.Button>
                                <div className="p-2 cursor-pointer bg-neutral-5 rounded-xl">
                                    <ThreeDotIcon />
                                </div>
                            </Popover.Button>
                            <Popover.Panel className="absolute right-0 z-10 overflow-hidden rounded-md top-full">
                                <ul className="flex flex-col gap-2 p-2 overflow-y-auto bg-white shadow-md max-h-60 min-w-[150px]">
                                    <li>
                                        <Popover.Button
                                            className={`flex items-center justify-start w-full gap-3 py-1 pl-2 rounded-md text-primary-50 button-2 bg-slate-50`}
                                        >
                                            <FaUsersSlash />
                                            <p>Huỷ kết bạn</p>
                                        </Popover.Button>
                                    </li>
                                </ul>
                                <ul className="flex flex-col gap-2 p-2 overflow-y-auto bg-white shadow-md max-h-60 min-w-[150px]">
                                    <li>
                                        <Popover.Button
                                            className={`flex items-center justify-start w-full gap-3 py-1 pl-2 rounded-md text-primary-50 button-2 bg-slate-50`}
                                            onClick={handleBlock}
                                        >
                                            <FaBan />
                                            <p>Chặn</p>
                                        </Popover.Button>
                                    </li>
                                </ul>
                            </Popover.Panel>
                        </Popover>
                    </div>
                }
            />
            <div className="flex items-center justify-between flex-shrink-0 py-4">
                <div className="relative flex-center-y">
                    <div className="w-12 h-12 mr-5 overflow-hidden image-container rounded-xl">
                        <Image
                            className="image"
                            src={conversationInfo?.conversation.users[0].avatar}
                            alt="avatar"
                            layout="fill"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold body-1 text-neutral-100">
                            {generateFullName(conversationInfo?.conversation.users[0].name)}
                        </p>
                        <span className="text-xs opacity-50">
                            {isFriendOnline ? (
                                <span className="text-success">
                                    <span className="ml-1">Đang trực tuyến</span>
                                </span>
                            ) : (
                                <>
                                    Hoạt động <TimeAgo datetime={lastLogin} locale="vi" />
                                </>
                            )}
                        </span>
                    </div>
                </div>
            </div>
            {conversationInfo && (
                <ListMessage
                    className={classBoxChat()}
                    userId={sUser.data?._id}
                    conversationId={conversationInfo.conversation._id}
                />
            )}
            {/* Preview file */}
            <div className="flex flex-col gap-2">
                <div className="flex gap-4 overflow-x-auto">
                    {files.map((file, index) => (
                        <ImageUploadItem
                            key={index}
                            index={index}
                            src={URL.createObjectURL(file)}
                            onRemove={handleRemoveImageUpload}
                        />
                    ))}
                </div>
                {audioFile && (
                    <div className="w-full gap-1 p-2 rounded-md flex-center-y bg-slate-200">
                        <p className="flex-1 font-bold line-clamp-1">{audioFile.name}</p>
                        <button className="flex-shrink-0 aspect-square" onClick={handleClearAudio}>
                            <GrClose />
                        </button>
                    </div>
                )}
            </div>

            {/* Input  */}
            <form
                className="flex items-center justify-between flex-shrink-0 w-full gap-2 py-6 mt-auto"
                onSubmit={handleSubmit}
            >
                <Popover className="relative flex-center">
                    <Popover.Button>
                        <PlusIcon />
                    </Popover.Button>

                    <Popover.Panel className="absolute left-0 z-10 bottom-[calc(100%+1rem)]">
                        <div className="gap-2 bg-white rounded-md overflow-hidden shadow-md flex-center-y min-w-[150px] flex-col">
                            <Popover.Button
                                className="w-full gap-4 p-2 border shadow-md flex-center"
                                onClick={handleUpload}
                            >
                                <BsImage />
                                Tải lên
                            </Popover.Button>
                            {!audioFile && (
                                <Popover.Button
                                    className="w-full gap-4 p-2 border shadow-md flex-center"
                                    onClick={handleUploadAudio}
                                >
                                    <BsFileMusic />
                                    Tải lên
                                </Popover.Button>
                            )}
                        </div>
                    </Popover.Panel>
                </Popover>
                <div className="flex items-center justify-between flex-1 px-2 py-2 h-9 bg-neutral-5 rounded-3xl body-2">
                    <input
                        type="text"
                        className="flex-1 h-full px-2 bg-neutral-5 body-2"
                        autoFocus
                        placeholder="Aa"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required={files.length === 0 && !audioFile}
                    />
                    <Popover className="relative flex-center">
                        {({ open }) => (
                            <>
                                <Popover.Button>
                                    <IconSetIcon />
                                </Popover.Button>
                                {open && (
                                    <Popover.Panel
                                        className={`${
                                            open ? 'block' : 'hidden'
                                        } absolute right-0 z-10 bottom-[calc(100%+1rem)]`}
                                        static
                                    >
                                        <Picker
                                            preload
                                            onEmojiClick={onEmojiClick}
                                            disableSearchBar
                                            disableSkinTonePicker
                                            disableAutoFocus
                                        />
                                    </Popover.Panel>
                                )}
                            </>
                        )}
                    </Popover>
                </div>

                <button
                    className="text-white transition-all rounded-full cursor-pointer bg-main-purple flex-center w-9 h-9 disabled:cursor-not-allowed disabled:opacity-50"
                    type="submit"
                    disabled={(!message && !files.length && !audioFile) || isLoading}
                >
                    {isLoading ? <BiLoaderAlt className="animate-spin" /> : <SendIcon />}
                </button>
            </form>
        </section>
    );
};

Room.protected = true;
export default Room;
