

let username = prompt("adinizi Giriniz")

if (username.length>0) {
    console.log("Kullanici Adini" + username)
    document.querySelector("#baslik").innerHTML += username
}else{
    console.log("Bir bilgi girilmedi")
}




