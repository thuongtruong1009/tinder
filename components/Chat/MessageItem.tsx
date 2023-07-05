import Image from 'next/image';

type Props = {
    messages: IMessageItem[];
    isMe: boolean;
};

const MessageItem = ({ messages, isMe }: Props) => {
    if (isMe)
        return (
            <>
                {messages.map((message, index) => {
                    if (message.type === 'text') {
                        return (
                            <div className="flex flex-wrap justify-end" key={index}>
                                <p className="bg-main-purple max-w-[250px] py-2.5 px-4 rounded-3xl rounded-tr-none body-2 text-white text-justify break-words">
                                    {message.value}
                                </p>
                            </div>
                        );
                    } else if (message.type === 'image') {
                        const classMessage =
                            message.value.length === 1
                                ? 'grid-cols-1'
                                : !(message.value.length % 2)
                                ? 'grid-cols-2'
                                : 'grid-cols-3';
                        return (
                            <div className={`max-w-[200px] grid ml-auto gap-2 ${classMessage}`} key={index}>
                                {(message.value as []).map((image) => (
                                    <div
                                        key={image}
                                        className="w-full overflow-hidden aspect-square image-container rounded-xl"
                                    >
                                        <Image className="image" src={image} alt="img" layout="fill" priority />
                                    </div>
                                ))}
                            </div>
                        );
                    } else if (message.type === 'audio') {
                        return (
                            <div className="flex flex-wrap justify-end" key={index}>
                                <audio controls className="audio max-w-[250px]">
                                    <source src={message.value as string} type="audio/mpeg" />
                                </audio>
                            </div>
                        );
                    }
                })}
            </>
        );
    return (
        <>
            {messages.map((message, index) => {
                if (message.type === 'text') {
                    return (
                        <div className="flex flex-wrap justify-start" key={index}>
                            <p className="bg-neutral-5 max-w-[250px] py-2.5 px-4 rounded-3xl rounded-tl-none body-2 text-left text-main-grey break-words">
                                {message.value}
                            </p>
                        </div>
                    );
                } else if (message.type === 'image') {
                    const classMessage =
                        message.value.length === 1
                            ? 'grid-cols-1'
                            : !(message.value.length % 2)
                            ? 'grid-cols-2'
                            : 'grid-cols-3';
                    return (
                        <div className={`max-w-[200px] grid mr-auto gap-2 ${classMessage}`} key={index}>
                            {(message.value as []).map((image) => (
                                <div
                                    key={image}
                                    className="w-full overflow-hidden aspect-square image-container rounded-xl"
                                >
                                    <Image className="image" src={image} alt="img" layout="fill" priority />
                                </div>
                            ))}
                        </div>
                    );
                } else if (message.type === 'audio') {
                    return (
                        <div className="flex flex-wrap justify-start" key={index}>
                            <audio controls className="audio max-w-[250px]">
                                <source src={message.value as string} type="audio/mpeg" />
                            </audio>
                        </div>
                    );
                }
            })}
        </>
    );
};

export default MessageItem;
