import { createContext, useContext, useRef, useState } from 'react';
import SocketIO, { io, Socket } from 'socket.io-client';

export const SocketContext = createContext<Socket | null>(null);
interface Props {
    children: React.ReactNode;
}
export const SocketProvider = ({ children }: Props) => {
    return (
        <SocketContext.Provider
            value={io((process.env.API_HOST as string) + '/notifications', {
                extraHeaders: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })}
        >
            {children}
        </SocketContext.Provider>
    );
};
export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
};
