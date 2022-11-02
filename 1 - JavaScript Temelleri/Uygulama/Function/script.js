// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu bulunuz.

// 2- Dikdörtgen alan ve çevresini hesaplayan fonksiyonu yazınız.

// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız.

// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.

// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.


// 1-
function yazdirma(kelime, tekrar_sayisi) {
    for (let i=1; i<=tekrar_sayisi; i++){
        console.log(kelime);
    }
}

yazdirma("Murat",7);


// 2-
function alan_cevre_Hesaplama(kısa_kenar, uzun_kenar){
    let alan,cevre;
    alan = kısa_kenar * uzun_kenar;
    cevre = 2*(kısa_kenar + uzun_kenar);
    console.log("Alan : " + alan);
    console.log("Çevre : " + cevre);
}

alan_cevre_Hesaplama(4,8);

function yazıTura(){
    let randomSayi = Math.floor(Math.random()*10%2);
    
    if(randomSayi == 0){
        console.log("Yazı");
    }
    else if(randomSayi == 1){
        console.log("Tura");
    }
}

yazıTura();

// 4-
function tamBolen(gonderilenSayi){
    let tamBolunenler= [];
    for(let i=2 ; i<= gonderilenSayi; i++){
        if(gonderilenSayi % i == 0){
            tamBolunenler.push(i);
        }
    }

    for(let j in tamBolunenler){
        console.log(tamBolunenler[j]);
    }
}

tamBolen(36);
tamBolen(9);

function sumAll(){
    let toplam = 0;
    for(let i=0 ; i < arguments.length; i++){
        toplam = toplam + arguments[i];
    }
    return toplam;
}
let sonuc;
sonuc = sumAll(15,45);
console.log(sonuc);
sonuc = sumAll(15,45,32,12);
console.log(sonuc);
sonuc = sumAll(15,45,23,23,2414,125,125,15123,32,12);
console.log(sonuc);
