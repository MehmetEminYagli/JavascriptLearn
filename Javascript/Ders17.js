//JavaScript | Ternary Operator(koşul? doğruysa:yanlışsa) ile If Kullanımı #17

//eger kullanıcı adı varsa yazdır yoksa kullanıcı adınız bulunamadı yaz

let username = prompt("Enter Your Name")
let info = document.querySelector("#baslik")

//Ternary Kullanımı:
// kosul ? doğru ise bunu yap  :  yanlış ise bunu yap
                //koşul 0 dan büyükse  doğru olan : yanlış olan
info.innerHTML = username.length > 0 ? username : "Not Found Name"