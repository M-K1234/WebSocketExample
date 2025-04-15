// import {WebSocketServer} from "/ws";

const wsClient = new WebSocket("ws://localhost:8081");

wsClient.addEventListener('open', () => {

    wsClient.addEventListener("message", (message) => {

        console.log(`Message recieved:\n${message.data}`);
    });
});

 function sendMessage () {
    const message = document.getElementById("message").value;
    wsClient.send(message);
}