//FORM SUBMİT

let formDOM = document.querySelector("#userform")

formDOM.addEventListener('submit',formsubmit)


function formsubmit(event) //event göndermeyi unutma yoksa işlem gerçekleşmez
{
    event.preventDefault() //bu kod ile url kısmında verilerin gözükmesini engellemiş oluyoruz
    console.log("işlem gerçekleşti")    

    //inputu bulduk değeri console log da yazdırdık sonra bunu localstorage'ye kayıt ettik
    let scoreinputDOM = document.querySelector("#score")
    console.log(scoreinputDOM.value)
    localStorage.setItem('score',scoreinputDOM.value)
}
