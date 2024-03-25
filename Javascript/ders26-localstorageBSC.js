//BSC ==> BÖLÜM SONU CANAVARI DEMEK :)


let countertext = document.querySelector('#numbertext')
let DOM_increase = document.querySelector('#increase')
let DOM_decrease = document.querySelector('#decrease')

//burada if ile daha önce veri yoksa 0 yaz var ise o veriyi yaz diyeceğiz ek olarak sayılar  ile çalıştığımız için number(ile sayıya çevirmemiz lazım)
let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0


countertext.innerHTML = counter



DOM_increase.addEventListener("click",clickEvent)
DOM_decrease.addEventListener("click", clickEvent)


function clickEvent()
{
    this.id == "increase" ? counter +=1 : counter -=1
    localStorage.setItem('counter' , counter) //kayıt ettik şimdi çekmemiz lazım
    countertext.innerHTML = counter
}