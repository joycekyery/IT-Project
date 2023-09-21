import { io } from 'socket.io-client'
const backend_url =
  process.env.NODE_ENV === 'development' &&
  process.env.REACT_APP_TEST_MODE === 'ON'
    ? 'https://localhost:8000'
    : process.env.REACT_APP_BASE_URL
//const backend_url = 'https://localhost:8000'
export const socketIo = { socket: io(backend_url) }
