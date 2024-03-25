//JavaScript | DOM'a CSS Class Bilgisi Eklemek veya Çıkarmak #13


let baslik = document.querySelector("#baslik")


//class eklemek
baslik.classList.add("text-primary")
baslik.classList.add("title")//bi böyle class ekleme yöntemi var birde virgül koyarak class ekleyebiliyoruz

baslik.classList.add("new-info","second-title","third-title")

//class silme
baslik.classList.remove("text-primary")
baslik.classList.remove("new-info","second-title","third-title") //yine bu şekilde de classları kaldırabiliriz

console.log(baslik.classList)


//14.ün ders karşılaştırma operatorleri
console.log(!!2)


