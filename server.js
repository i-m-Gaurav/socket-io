import express from 'express'

import { createServer } from 'node:http';

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';


const app = express();
const server = createServer(app);
// create a new io here.

const io = new Server(server);


const __dirnamme = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
	res.sendFile(join(__dirnamme, 'index.html'));
})

// create a new connection here

io.on('connection', (socket) => {
	socket.on('chat message', (msg) => {
		io.emit('chat message', msg);
	})
});

server.listen(3000, () => {
	console.log("server is runiing on the 3000")
})


