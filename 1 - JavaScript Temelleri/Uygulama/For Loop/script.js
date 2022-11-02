let sayilar = [1,5,7,15,3,25];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.

// 2- sayilar listesindeki hangi sayılar 5'in katıdır?

// 3- sayilar listesindeki çift sayıların toplamını bulunuz.

let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];

// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.

// 5- urunler listesinde içinde samsung geçen kaç ürün vardır.


let ogrenciler = [
     {"ad" : "yigit", "soyad": "bilgi", "notlar": [60,70,60]},
     {"ad" : "ada", "soyad": "bilgi", "notlar": [80,70,80]},
     {"ad" : "cınar", "soyad": "turan", "notlar": [70,70,60]},

]

// 6- ognreciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.

// 7- tüm öğrencilerin not ortalaması kaçtır?


// 1-
for (let sayi in sayilar){
    console.log(sayilar[sayi]* sayilar[sayi]);
}

// 2- 
for (let sayi in sayilar){
    if(sayilar[sayi] %5 == 0){
        console.log(`${sayilar[sayi]} 5'in katıdır.`);
    }
}

// 3- 
let toplam = 0;
for (let sayi in sayilar) {
    if(sayilar[sayi] % 2 == 0){
        toplam += sayilar[sayi];
    }
}
console.log(toplam);

// 4-
for(let urun in urunler){
    urunler[urun] = urunler[urun].toUpperCase();
    console.log(urunler[urun]);
}

// 5-
let isOkey=0;
let sayac=0;
for(let urun in urunler){
    isOkey = urunler[urun].indexOf("samsung");
    if(isOkey == -1){
        sayac++;
    }
}
console.log("İçinde samsung geçen ürün sayısı : " + sayac);


// 6-

for (let ogrenci in ogrenciler) {
    let ortalama = 0;
    for (let i=0 ; i < 3 ; i++)
        {
            ortalama += ogrenciler[ogrenci].notlar[i];
        }
        ortalama = ortalama / 3;
        console.log(`${ogrenciler[ogrenci].ad} ${ogrenciler[ogrenci].soyad} ortalaması ${ortalama}`);
}

// 7-
let ortalama = 0;
for (let ogrenci in ogrenciler) {
    for (let i=0 ; i < 3 ; i++)
        {
            ortalama += ogrenciler[ogrenci].notlar[i];
        }
        
}
ortalama = ortalama/9;
console.log("Tum öğrencilerin ortalaması : "+ ortalama);