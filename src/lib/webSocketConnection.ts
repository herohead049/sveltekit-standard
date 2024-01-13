import ioClient from 'socket.io-client';
//let _WS = import.meta.env.VITE_WS_ADDRESS;
//import { PUBLIC_WS_ADDRESS } from './utils/settings';
import { env } from '$env/dynamic/public';

const ENDPOINT = env.PUBLIC_WS_ADDRESS;

const socket = ioClient(ENDPOINT);

export const io = socket;
