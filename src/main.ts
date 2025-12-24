alert("Hello and welcome")
const socket = new WebSocket('ws://localhost:7070', ['saadMeddiche', 'red']);

socket.onopen = () => {
    console.log('Connected to chat server');
    socket.send("#HS# SaadMeddiche");
};

socket.onmessage = (event) => {
    console.log(`Message received: ${event.data}`);
};

socket.onerror = (error) => {
    console.log(`Error: ${error}`)
}

socket.onclose = (event) => {

    if(event.wasClean) {
        console.log('Clean close')
    } else {
        console.log('Dirty close')
    }
};