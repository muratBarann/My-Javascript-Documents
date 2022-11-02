let ogrenciler = ["ahmet","mehmet","elif","murat","zeynep"];
let sonuc;

// sonuc = ogrenciler.length;

// array to string
// sonuc = ogrenciler.toString();
// sonuc = ogrenciler.join(" ");


// eleman silme
// sonuc = ogrenciler.pop();     //Sondan eleman silinir
// sonuc = ogrenciler.shift();      //Baştan eleman silinir.           

// eleman ekleme
// sonuc = ogrenciler.push("Tuğçe");     //Sona ekleme yapar.
// sonuc = ogrenciler.unshift("Tuğçe");  //Başa ekleme yapar.

// console.log(ogrenciler);

let marka1 = ["mazda", "toyota"];
let marka2 = ["opel", "renault"];
let marka3 = ["bmw", "mercedes"];

// sonuc = marka1.concat(marka2,marka3);
// sonuc = marka1.splice(0, 0, marka2);
// sonuc = marka1.splice(0, 0, "bmw","mercedes","audi");
sonuc = marka1.splice(0,1);

console.log(sonuc);
console.log(marka1);