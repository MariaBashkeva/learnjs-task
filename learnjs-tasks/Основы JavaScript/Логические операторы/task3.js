let login =prompt()
if (login=="Админ") {
    let password=prompt()
    if (password=="Я главный"){
        alert("Здравствуйте!")
    }else if (!password){
        alert("Отменено")
    }else {
        alert("Неверный пароль")
    }
} else if (!login){
    alert("Отменено")
} else {
    alert("Я вас не знаю")
}