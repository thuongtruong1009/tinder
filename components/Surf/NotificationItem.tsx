import HeartIcon from '../Icons/HeartIcon';
import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';

// import it first.
import vi from 'timeago.js/lib/lang/vi';
import { useAppDispatch } from '../../hooks/redux';
import { addMatch } from '../../redux/reducers/matchSlice';

// register it.
timeago.register('vi', vi);
interface Props {
    data: IDataGetNotificationResponse;
}

export default function NotificationItem({ data }: Props) {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        if (data.type === 'match' && !data.hasSeen) {
            dispatch(addMatch(data));
        }
    };
    return (
        <div
            className={`py-2 px-1 rounded-md flex-center-y ${!data.hasSeen ? 'bg-primary-40' : 'bg-gray-50'}`}
            onClick={handleClick}
        >
            <div className="flex-shrink-0 p-2">
                <HeartIcon className={`${!data.hasSeen ? 'animate-bounce' : ''}`} />
            </div>
            <div className={`flex-1 ${!data.hasSeen ? 'text-white' : ''}`}>
                <p className="body-1">{data.message}</p>
                <span className="text-xs text-inherit">
                    <TimeAgo datetime={data.createdAt} locale="vi" />
                </span>
            </div>
        </div>
    );
}
