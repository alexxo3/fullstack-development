import http from 'node:http';
import { getDataFromDB } from './database/db.js';

const PORT = 8000;

const server = http.createServer(async (req, res) => {
    if(req.url === '/data' && req.method === 'GET') {
        const data = await getDataFromDB();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`))