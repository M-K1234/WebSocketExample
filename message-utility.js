import {WebSocketServer} from "ws";

const webSocket = new WebSocketServer({ port: 8081 });



export const createWebSocket = () => {

webSocket.on("connection", (ws, req) => {
    
    console.log(`Connection from: ${req.socket.remoteAddress}`);

    ws.on("message", (message) => {

        console.log(`Received message!`);
        ws.send(`Server response: ${message}`);
    });

    ws.on("close", () => {
        console.log(`Client: ${req.socket.remoteAddress} disconnected`);
    });
});
}

