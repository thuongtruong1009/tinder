import { createContext, useContext, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

export const SocketContext = createContext<Socket | null>(null);
interface Props {
    children: React.ReactNode;
}
export const SocketProvider = ({ children }: Props) => {
    const socket = useRef<Socket>(
        io((process.env.API_HOST as string) + '/notifications', {
            extraHeaders: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            autoConnect: false,
        }),
    );
    return <SocketContext.Provider value={socket.current}>{children}</SocketContext.Provider>;
};
export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
};
