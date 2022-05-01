//сохранение имени, если не было сохранено ранее
document.addEventListener("DOMContentLoaded", function (event) {
    let userName = localStorage.getItem('name');
    if (userName != null) {
        document.querySelector("#user").value = userName;
    }
});

const commentButton = document.querySelector('.btn');
commentButton.addEventListener("click", checkMessage);

function sendMessage(user, checkedComment) {
    document.querySelector("#chat").innerHTML += `<span class='user'>${user}: </span><span>${checkedComment}</span><br>`;
}

function checkMessage() {
    let user = document.querySelector("#user").value;
    let comment = document.querySelector("#comment").value;
    const checkedComment = comment.replace(/viagra|xxx/ig, "***");

    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', user);
    }

    sendMessage(user, checkedComment);
}