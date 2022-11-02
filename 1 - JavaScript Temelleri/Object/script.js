let kullaniciA = {
    "ad" : "Murat",
    "soyad" : "Baran",
    "yas" : "28",
    "adres" : {
        "sehir" : "istanbul",
        "mahalle" : "seyrantepe"
    },
    "hobiler" : ["futbol","basketbol"]
};

let kullaniciB = {
    "ad" : "Ali",
    "soyad" : "Can",
    "yas" : "21",
    "adres" : {
        "sehir" : "izmir",
        "mahalle" : "seyran"
    },
    "hobiler" : ["sinema","müzik"]
};

let sonuc;
let sonuc2;

sonuc = kullaniciA.ad;
sonuc = kullaniciA["ad"];

sonuc = kullaniciA.soyad;
sonuc = kullaniciA.yas;
sonuc = kullaniciA.adres;
sonuc = kullaniciA.adres.sehir;
sonuc = kullaniciA.adres.mahalle;
sonuc = kullaniciA.hobiler[1];

sonuc2 = kullaniciB.ad;
sonuc2 = kullaniciB.soyad;
sonuc2 = kullaniciB.yas;
sonuc2 = kullaniciB.adres;
sonuc2 = kullaniciB.hobiler;

console.log(sonuc);
console.log(sonuc2);


let urunler = [
    {
        "urun_adi" : "BMW X5",
        "urun_fiyati" : "2.000.000"
    },

    {
        "urun_adi" : "AUDI A4",
        "urun_fiyati" : "1.000.000"
    }
];

sonuc = urunler[1].urun_adi;
sonuc = urunler[1].urun_fiyati;
console.log(sonuc);


