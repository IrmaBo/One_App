const replyBox = document.querySelector('.reply-input');
const ul = document.querySelector('.chat-container');
const message = document.querySelectorAll('.message');

//main function to add the new message to the list: creates the li, picks a random class between the choices of 'left' and 'right', then adds it to the list/chat
function addNewMsg(){
  const newMsg = document.createElement("LI");
 //const classChoices = ['right'];
 //let randomChoice = Math.floor(Math.random()*classChoices.length);
  // console.log(randomChoice);
  if (replyBox.value) {
  newMsg.setAttribute('class', 'right');
  newMsg.classList.add('message');
  
var textnode = document.createTextNode(replyBox.value);      
newMsg.appendChild(textnode);           
ul.appendChild(newMsg);
for(var i=0; i<message.length;i++){
  let msg = message[i];
  //the line below aims to replicate the way older messages go off screen as new ones come in
  msg.setAttribute('style', 'transform: translateY(-20px);');
 }
}
}
//listens for submission with enter button
replyBox.addEventListener('keypress', (e) => {
  if(e.keyCode == 13){
    addNewMsg();
    replyBox.value = '';
  }else{
    return
  } 
})