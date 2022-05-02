//получение значений из локального хранилища при загрузке страницы
document.addEventListener("DOMContentLoaded", function (event) {
    let user = localStorage.getItem('name');
    if (user != null) {
        document.querySelector("#user").value = user;
    }

    let comment = localStorage.getItem('comment');
    if (comment != null) {
        document.querySelector("#comment").value = comment;
    }

    let src = localStorage.getItem('avatar');
    if (src != null) {
        document.querySelector(".avatar").src = src;
    }

});

//buttons
const commentButton = document.querySelector('.add');
const removeButton = document.querySelector('.remove');
const downloadButton = document.querySelector('.download');
commentButton.addEventListener("click", checkMessage);
removeButton.addEventListener("click", removeData);
downloadButton.addEventListener("click", downloadImage);

//запись имени и сообщения в чат
function sendMessage(user, checkedComment) {
    document.querySelector("#chat").innerHTML += `<span class='user'>${user}: </span><span>${checkedComment}</span><br>`;
}

//проверка спама и сохранение данных
function checkMessage() {
    let user = document.querySelector("#user").value;
    let comment = document.querySelector("#comment").value;
    const checkedComment = comment.replace(/viagra|xxx|ххх/ig, "***");

    //сохранение имени и сообщения пользователя в локальное хранилище
    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', user);
    }
    if (localStorage.getItem('comment') == null) {
        localStorage.setItem('comment', checkedComment);
    }
    sendMessage(user, checkedComment);
}

//удаление данных из локального хранилища и из поля формы
function removeData() {
    localStorage.removeItem('name');
    localStorage.removeItem('comment');
    localStorage.removeItem('avatar');
    user.value = '';
    comment.value = '';
    document.querySelector(".avatar").src = "https://bootstraptema.ru/snippets/icons/2016/mia/7.png";
}

//загрузка новой картинки
function downloadImage() {
    let src = document.querySelector('#imageSrc').value;
    document.querySelector('.avatar').src = src;
    if (localStorage.getItem('avatar') == null) {
        localStorage.setItem('avatar', src);
    }
}