const chatBarElement = document.getElementById("chat-bar");
const chatContentElement = document.getElementById("chat-content");
const closeBTN = document.getElementById("close-btn");


chatBarElement.addEventListener("click",function(){
    chatBarElement.className="chat-bar closed"
    chatContentElement.className="chat-content open"
})


closeBTN.addEventListener("click",function(){
    chatBarElement.className="chat-bar open"
    chatContentElement.className="chat-content  closed"
})