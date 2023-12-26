function solve() {
   let chatBox = document.getElementById('chat_messages')
   let sendButton = document.getElementById('send')
   let newMessage = document.getElementById('chat_input')

   sendButton.addEventListener('click', () => {
      let myMessage = document.createElement('div')
      myMessage.classList.add('message')
      myMessage.classList.add('my-message')
      myMessage.innerText = newMessage.value
      chatBox.appendChild(myMessage)
      newMessage.value = ''
   })
}


