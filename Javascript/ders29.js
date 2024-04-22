/*formlarla çalışmak

    1: formu seç
    2: input bilgisini UL icerisine ekle
    3: form içindeki bilgiyi sıfırla
    4: eğer formda bilgi girilmez ise kullanıcıyı uyar
*/


let userFormDom = document.querySelector('#userform')
userFormDom.addEventListener('submit',formHandler)
let alertDOM = document.querySelector('#alert')

const alertFunction = (message) => `${message}`

function formHandler(event)
{
    event.preventDefault()
    //butona tıklandığında verileri alalım
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')

    if (USER_NAME.value && SCORE.value) { //değerler true ise dolu ise ekle
        additem(USER_NAME.value, SCORE.value)
        USER_NAME.value = ""
        SCORE.value = "" //verileri gönderdikten sonra text içerisindeki yazıları sıfırla
    }else
    {
        alertDOM.innerHTML = alertFunction('hatali girdin kardeşş')
        console.log('hatali işlem')
    }
    
}

//listeye ekleme

let userListDom = document.querySelector('#userList')

function additem(username , score) 
{
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
    ${username}  
    <span style="margin-left:100px; background:blue; color:white; font-size:16px; border-radius:50px;padding:5px; ">${score}</span>
    `
    
    userListDom.append(liDOM)
}