//For Dongüsü

/*

    for([baslangıc atamasi]); [kosul ifadesi] ;[artırım ifadesi] 
    {
        yapılacak islem 
    }

*/

let users = ["Batuhan", "Mehmet" ,"Mustafa"]
const userListDom = document.querySelector("#userList")
for (let index = 0; index < users.length; index++) {
    
    console.log(users[index])

    //benim her bir eleman için "li" elementini create etmem gerekiyor aksi taktirde listedeki son elemanı yazar sadece
    const liDom = document.createElement('li')

    liDom.innerHTML =users[index];
    
    //olusturdugumuz bu li elementlerini ul listene child olarak atamalıyız ki nesneleri görebilelim
    userListDom.appendChild(liDom)

}
