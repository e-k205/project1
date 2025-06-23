import app from './app';
import { createServer } from 'http';
const PORT = 3000;

const server = createServer(app);

server.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
});