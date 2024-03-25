//JavaScript Koşullarla Çalışmak | Bölüm Sonu Egzersizi #18


let examNote = prompt("Enter Note")
let textinfo;
let info = document.querySelector("#info")
 


const smile = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>`

const SAD = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>`



if (examNote >=0 && examNote <=100) {
    textinfo = smile
    info.classList.add("text-primary")
    if (examNote >=90) {
       textinfo += "AA"
    }
    else if (examNote >=85) {
        textinfo += "BA"
    }
    else if (examNote >=80) {
        textinfo += "BB"
    }
    else if (examNote >=75) {
        textinfo += "CB"
    }
    else if (examNote >=70) {
        textinfo += "DC"
    }
    else if (examNote >=65) {
        textinfo += "DD"
    }
    else if (examNote >=60) {
        textinfo += "DF"
    }
    else if (examNote >=50) {
        textinfo += "FD"
    }else
    {
        textinfo = SAD
        textinfo += "FF"
        info.classList.remove("text-primary")
        info.classList.add("text-danger")
    }
    info.innerHTML = textinfo
}
else
{
 info.innerHTML = "Lütfen 0 ila 100 arasinda bir sayi giriniz"
}



