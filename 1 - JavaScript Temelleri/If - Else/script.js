let username = "muratbaran"
let password = "1234"


if (username === "muratbaran"){
    console.log("Kullanıcı Adı doğru");
}
// 1- Eğer sadece if bloğu olursa blok (parantez) içi true ise parentez içine girer aksi halde program devam eder



if (username ==="muratbaran"){
    console.log("Kullanıcı Adı");
}

else{
    console.log("Girilen Kullanıcı Adı Yanlış");
}
//2- Burada if bloğu (parantez içi) true ise parentez içine girer aksi halde program else bloğunun içindekileri çalıştırır ve program devam eder



if ((username == "muratbaran") && (password === "1234")){
    console.log("Kullanıcı Adı ve Şifre Doğru");
}

else{
    console.log("Kullanıcı Adı Veya Şifre Yanlış");
}
//3- Burada if bloğu (parantez içi) true ise parentez içine girer aksi halde program else bloğunun içindekileri çalıştırır ve program devam eder

// && => AND Operatoru
// true && true => true
// true && false => false
// false && true => false
// false && false => false 

// || => OR Operatoru
// true && true => true
// true && false => true
// false && true => true
// false && false => true 




if (username ==="muratbaran"){
    if(password === "12345") {
        console.log("Kullanıcı Adı ve Şifre Doğru");
    }
    else {
        console.log("Kullanıcı Adı Doğru Şifre Yanlış");
    }
}

else{
    console.log("Girilen Kullanıcı Adı Yanlış");
}
//2- Burada if bloğu (parantez içi) true ise bir alttaki if bloğuna girer ve o if bloğunu sorgular true ise if içindeki sorgular çalıştırılır false ise else bloğundaki ve daha sonra program devam eder.