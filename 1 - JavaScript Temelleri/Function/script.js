function selamlasma(){
    console.log("Merhaba");
}

function selamlasma_2(msg){
    console.log(msg);
}

// selamlasma();

selamlasma_2("Merhabaa");
selamlasma_2("Günaydın");
// selamlasma_2();     //undefined

function yasHesapla(dogumYili) {
    return new Date().getFullYear() - dogumYili;
}

let yasAhmet = yasHesapla(1995);
let yasElif = yasHesapla(1945);

console.log(yasAhmet, yasElif);

function emekliligeKacYilKaldi(dogumYili, isim){
    let yas = yasHesapla(dogumYili);
    let kalan_yil = 65 - yas;
    if(kalan_yil > 0) {
        console.log(`${isim} emekli olmanıza ${kalan_yil} yıl kaldı`);
    }
    else {
        console.log(`${isim} Emeklisiniz`);
    }
}

emekliligeKacYilKaldi(1997, "Ahmet");
emekliligeKacYilKaldi(1947, "Elif");

