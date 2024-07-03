
// Listen for new messages using Laravel Echo
window.Echo.channel('chatroom')
    .listen('.message.sent', (e) => {
        const now = new Date();
        console.log(now.toString(), "This message received in chatroom:", e);
        // Append the new message to the chatroom
        const messages = document.getElementById('messages');
        const messageElement = document.createElement('p');
        messageElement.innerText = e.message;
        messages.appendChild(messageElement);
    });

// Function to send a new message
window.sendMessage = function() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    const now = new Date();
    console.log(now.toString(), "we are sending message to server by http post request ...")
    axios.post('/chat/send-message', { message: message })
        .then(response => {
            const now2 = new Date();
            console.log(now2.toString(),"message sent to server and server response ok (it means it saved message in db");
            // console.log(response.data);
            // Clear the input field after sending
            messageInput.value = '';
        })
        .catch(error => console.error(error));

    // Try to send with socket:
    // window.Pusher.send_event('.message.sent', { message: message },'chat-room' )
    // from source on console:
    //send_event(event_name, data, channel) {
    //     return this.connection.send_event(event_name, data, channel);
    // }
    // based on document:
    // window.Pusher.trigger('chat-room','.message.sent', { message: message } )
    // it seems to we can not send by pusher to server ws directly.
    // console.log("sendMessage finished")
    
};

