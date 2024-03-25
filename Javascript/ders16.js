//Çoklu Koşul Yapisi Kullanimi #16


let username = prompt("İsim Giriniz")
let age = prompt("Yaşinizi Giriniz")
let baslik = document.querySelector("#baslik")

if (username>0 && age>=18) 
{
    baslik.innerHTML = "Ehliyet alabiliyorusnuz"
}
else if (!username && !age) {
    baslik.innerHTML = "Adinizi ve yaşinizi girmediniz"
}
else if (!username) 
{
    baslik.innerHTML = "adinizi girmediniz"
} 
else if (!age) 
{
    baslik.innerHTML = "yaşinizi girmediniz"
}
else
{
    baslik.innerHTML = "18 yaşindan küçüksünüz ehliyet alamazsiniz"
}



