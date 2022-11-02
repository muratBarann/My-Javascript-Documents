let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10");
sonuc = parseFloat("10.5");
sonuc = parseInt("10a");
sonuc = parseInt("a19");

sonuc = isNaN("10a");
sonuc = isNaN("10");

let sayi = 15.1235567;
// sonuc = sayi.toPrecision(5);        sayıyı beş basamakta sabitler ve stringe çevirir
// sonuc = sayi.toFixed(5);                Sayının ondalıklı kısmını 5 basamağa sabitler

sonuc = Math.round(2.4);        //yuvarlama işlemi yapılır .5 ve üstü bir sonraki sayıya yuvarlanır .5 in altı ise alt sayıya yuvarlanır.
sonuc = Math.round(2.6);

sonuc = Math.ceil(2.1);         
sonuc = Math.ceil(2.6);         //ondalıklı kısım ne olursa olsun sayı bir üst sayıya yuvarlanır.

sonuc = Math.floor(2.1);
sonuc = Math.floor(2.8);        //ondalıklı kısım ne olursa olsun sayı bir alt sayıya yuvarlanır.

sonuc = Math.sqrt(25);          //sqrt() ile karekök alma işlemi yapıyoruz.

sonuc = Math.pow(4,3);          //pow() ile üs alma işlemi yapıyoruz.

sonuc = Math.abs(-12);          //abs() ile mutlak değer alma işlemi yapıyoruz.

sonuc = Math.min(15,45,12,7,1);
sonuc = Math.max(15,45,12,7,1);

sonuc = Math.random();          //0 - 1 arasında rastgele bir sayi üretiriz.
sonuc = Math.floor(Math.random()*10);       // 0-9 arasında rastgele rakam üretiriz.
sonuc = Math.floor(Math.random()*10)+1;    // 1-10 arasında rastgele rakam üretiriz.


console.log(typeof sonuc);
console.log(sonuc);