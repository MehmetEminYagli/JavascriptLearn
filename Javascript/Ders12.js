//liste içerisindeki son elemana ulaşmak veya eleman eklemek 


let lastchild = document.querySelector("ul#list>li:last-child")
lastchild.innerHTML= "son öge değiştir"

let firsChild = document.querySelector("ul#list>li:first-child")
firsChild.innerHTML="ilk öge değişti"


//listeye eleman eklemek

let ulDom = document.querySelector("ul#list")
let liDom = document.createElement('li')

liDom.innerHTML ="Yeni eleman ekledim" //bunu yapmak yeterli olmuyor bunun gözükmesi için append komutunu kullanmamız gerekiyor en baştaki ul ye

ulDom.append(liDom)


//liste başına eleman eklemek prepend komutu ile liste başına ekleirz

ulDom.prepend(liDom)