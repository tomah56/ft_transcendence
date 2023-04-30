import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.HOSTIP + ":" + process.env.SOCKET_PORT;

export const socket = io(URL, {
    autoConnect: false,
});

