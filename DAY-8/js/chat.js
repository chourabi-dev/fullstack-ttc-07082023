const chatBarElement = document.getElementById("chat-bar");
const chatContentElement = document.getElementById("chat-content");
const closeBTN = document.getElementById("close-btn");
const sendBTN = document.getElementById("send-btn");
const messageElement = document.getElementById("message");
const messageListElement = document.getElementById("message-list");

var messages = [];



chatBarElement.addEventListener("click",function(){
    chatBarElement.className="chat-bar closed"
    chatContentElement.className="chat-content open"
})


closeBTN.addEventListener("click",function(){
    chatBarElement.className="chat-bar open"
    chatContentElement.className="chat-content  closed"
})


sendBTN.addEventListener("click",function(){
    const msg = messageElement.value;

    if (msg != '') {
        
    const msgTMP = {
        text: msg,
        sender:0 // 0 user 1 pc
    }
    messages.push( msgTMP )


    const response = {
        text: "Thank you for your message, will be back to you as soon as possible.",
        sender:1 // 0 user 1 pc
    }
    messages.push( response )


    messageElement.value='';
    

    showMessages();

    }
})


function showMessages(){
    let blocHTML = '';
    messages.map((m)=>{
        if (m.sender == 0) {
            blocHTML = blocHTML + `
            <div class="d-flex justify-content-end">
                <div class="message-text user">
                    ${m.text}
                </div>
            </div>
            `;
        } else {
            blocHTML = blocHTML + `
            <div class="d-flex">
                <div class="message-text pc">
                    ${m.text}
                </div>
            </div>
            `;

        }
    })

    messageListElement.innerHTML = blocHTML;
}