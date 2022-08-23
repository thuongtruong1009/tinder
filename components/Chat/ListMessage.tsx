import { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppDispatch } from '../../hooks/redux';
import { conversationGet } from '../../redux/actions/conversationActions';
import { toastError } from '../../utils/toast';
import MessageItem from './MessageItem';

interface Props {
    userId?: string;
    className: string;
    data: IConversationPagination;
}

export default function ListMessage({ userId, className, data }: Props) {
    const dispatch = useAppDispatch();
    const [pagination, setPagination] = useState({
        page: data.page,
        limit: data.limit,
    });
    useEffect(() => {
        async function fetchConversation() {
            try {
                const { page, limit } = await dispatch(
                    conversationGet({ id: data.conversation._id, limit: pagination.limit, page: pagination.page }),
                ).unwrap();
                setPagination({
                    page,
                    limit,
                });
            } catch (error) {
                toastError((error as IResponseError).error);
            }
        }
        if (!pagination.page && !pagination.limit) {
            fetchConversation();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    return (
        <>
            <div id="scrollableDiv" className={`${className} flex flex-col-reverse overflow-auto `}>
                {data.conversation.messages && (
                    <InfiniteScroll
                        dataLength={data.conversation.messages.length}
                        next={() => {
                            console.log('next');
                        }}
                        className="gap-4 px-4 py-2"
                        style={{ display: 'flex', flexDirection: 'column-reverse' }}
                        inverse={true} //
                        hasMore={true}
                        loader={<p className="text-sm font-semibold text-center">Đang tải...</p>}
                        scrollableTarget="scrollableDiv"
                    >
                        {data.conversation.messages?.map((message) => (
                            <MessageItem
                                key={message._id}
                                isMe={message.senderId._id === userId}
                                messages={message.messages}
                            />
                        ))}
                    </InfiniteScroll>
                )}
            </div>
        </>
    );
}
