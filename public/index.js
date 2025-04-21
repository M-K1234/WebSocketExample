// import {WebSocketServer} from "/ws";

// const { get } = require("https");

const wsClient = new WebSocket("ws://localhost:8081");

wsClient.addEventListener('open', () => {

    wsClient.addEventListener("message", (message) => {

       document.getElementById("serverResponse").innerHTML += `<p>${message.data}</p> <br>`;
    });
});

 function sendMessage () {
    const message = document.getElementById("message").value;
    wsClient.send(message);
}