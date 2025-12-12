const form = document.querySelector("form");
const sendBtn = document.getElementById("sendBtn");
const msgFeedback = document.getElementById("msgFeedback");

form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    msgFeedback.style.display = "block";
    sendBtn.disabled = true; 
    sendBtn.textContent = "Sent!";
    form.reset(); 
});

