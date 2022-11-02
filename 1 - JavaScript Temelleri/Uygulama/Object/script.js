// 1-Sipariş bilgilerini object içerisinde saklayınız.
// 2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
// 3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız

// 1-

let siparis_1 = {
    "siparis_id" : 101,
    "siparis_tarih" : "31.12.2022",
    "odeme_sekli" : "kredi kartı",
    "kargo_adresi" : "Yahya kaptan mah. Kocaeli İzmit",
    "satin_alinan_urunler" :
    [
        {
            "urun_id" : 5,
            "urun_basligi" : "Iphone 13 Pro",
            "urun_fiyati" : 22000
        },

        {
            "urun_id" : 6,
            "urun_basligi" : "Iphone 13 Pro Max",
            "urun_fiyati" : 27000
        }
    ],
    "musteri" :{
        "musteri_id" : 12
    },
    "satici" : {
        "firma_id" : 34,
        "firma_adi" : "Apple Turkiye"
    }
};

let siparis_2 = {
    "siparis_id" : 102,
    "siparis_tarih" : "30.12.2022",
    "odeme_sekli" : "kredi kartı",
    "kargo_adresi" : "Yahya kaptan mah. Kocaeli İzmit",
    "satin_alinan_urunler" :
    [
        {
            "urun_id" : 5,
            "urun_basligi" : "Iphone 13 Pro",
            "urun_fiyati" : 22000
        }
    ],
    "musteri" :{
        "musteri_id" : 12
    },
    "satici" : {
        "firma_id" : 34,
        "firma_adi" : "Apple Turkiye"
    }
};

// 2-

let sonuc;
sonuc = siparis_1.satin_alinan_urunler[0].urun_fiyati+ siparis_1.satin_alinan_urunler[1].urun_fiyati*0.18;
console.log(`${siparis_1.satin_alinan_urunler[0].urun_basligi} KDV dahil ücreti : ${sonuc}`);

sonuc = siparis_1.satin_alinan_urunler[1].urun_fiyati + siparis_1.satin_alinan_urunler[1].urun_fiyati*0.18;
console.log(`${siparis_1.satin_alinan_urunler[1].urun_basligi} KDV dahil ücreti : ${sonuc}`);

// 3-

sonuc = (siparis_1.satin_alinan_urunler[0].urun_fiyati + siparis_1.satin_alinan_urunler[1].urun_fiyati + siparis_2.satin_alinan_urunler[0].urun_fiyati) ;

sonuc = sonuc + (sonuc * 0.18);

console.log (`Tüm Siparişerin KDV Dahil Ucreti : ${sonuc}`);