import { createContext, useContext } from 'react';
import { io, Socket } from 'socket.io-client';

let socket: any;
const ISSERVER = typeof window === 'undefined';
if (!ISSERVER) {
    socket = io((process.env.API_HOST as string) + '/notifications', {
        extraHeaders: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
}
export const SocketContext = createContext(socket as Socket);
interface Props {
    children: React.ReactNode;
}
export const SocketProvider = ({ children }: Props) => {
    return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};
export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
};
