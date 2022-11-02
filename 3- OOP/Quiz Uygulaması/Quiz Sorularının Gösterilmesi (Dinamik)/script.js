function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}


Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap;
}

let sorular = [
    new Soru("1-Hangisi javaScript paket yönetim uygulamasadır", {a: "java", b: "npm", c:"Typescript"}, "b"),
    new Soru("2-Hangisi js paket yönetim uygulamasadır", {a: "java", b: "npm", c:"Typescript"}, "b"),
    new Soru("3-Hangisi JavaScript paket yönetim uygulamasadır", {a: "java", b: "npm", c:"Typescript"}, "b"),
    new Soru("4-Hangisi JS paket yönetim uygulamasadır", {a: "java", b: "npm", c:"Typescript"}, "b")
];


function Quiz(sorular){
    this.sorular = sorular;
    this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function(){
    return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular);


document.querySelector(".btn_start").addEventListener("click",function(){
    document.querySelector(".quiz_box").classList.add("active");
    soruGoster(quiz.soruGetir());
});



document.querySelector(".next_btn").addEventListener("click",function(){
    if(quiz.sorular.length != quiz.soruIndex + 1){
        quiz.soruIndex +=1 ;
        soruGoster(quiz.soruGetir());
    }
    else{
        console.log("quiz bitti");
    }
});


function soruGoster(soru) {
        let question = `<span>${soru.soruMetni}</span>`;
        let options = '';
    
        for (let cevap in soru.cevapSecenekleri){
            options += 
                `
                <div class = "option">
                    <span><b>${cevap}</b>:  ${soru.cevapSecenekleri[cevap]}</span>
                </div>
                `;
        }
        document.querySelector(".question_text").innerHTML = question;
        document.querySelector(".option_list").innerHTML = options;
};



