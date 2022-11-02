
for (let i=0 ; i < 10; i++){
    console.log((i+1)+". Hello World ");
}
for (let i=0 ; i < 10; i++){
    console.log(i);
}

let toplam = 0;

for (let i=1 ; i<=10; i++ ){
    toplam = toplam + i;
}
console.log(toplam);



let sayilar = [15, 25, 47, 14, 85, 13];
toplam = 0;

for (let i=0 ; i<sayilar.length; i++){
    toplam +=sayilar[i];
}
console.log(toplam);



let sayilar2 = [52, 78, 38, 94, 81, 47, 69];
toplam = 0;

for (let index in sayilar2){
    toplam = sayilar2[index] + toplam;

}
console.log(toplam);


for(let sayi of sayilar2){
    console.log(sayi);
}


let user = {
    "name" : "Murat",
    "surname" : "Baran",
    "adres" : "istanbul",
    "password" : "125478"
} 
for (let key in user)
{
    console.log(user[key]);
}