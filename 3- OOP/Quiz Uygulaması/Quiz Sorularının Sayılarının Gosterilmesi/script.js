const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener("click",function(){
    ui.quiz_box.classList.add("active");
    ui.soruGoster(quiz.soruGetir());
    soruSayisiniGoster(quiz.soruIndex+1, quiz.sorular.length);
    ui.btn_next.classList.remove("show");
});



ui.btn_next.addEventListener("click",function(){
    if(quiz.sorular.length != quiz.soruIndex + 1){
        quiz.soruIndex +=1 ;
        ui.soruGoster(quiz.soruGetir());
        soruSayisiniGoster(quiz.soruIndex+1, quiz.sorular.length);
        ui.btn_next.classList.remove("show");
    }
    else{
        console.log("quiz bitti");
    }
});

ui.option_list = document.querySelector(".option_list");
ui.correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`;       
ui.incorrectIcon = `<div class="icon"><i class="fas fa-times"></i></div>`;




function option_Selected(option){
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if(soru.cevabiKontrolEt(cevap)){

        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correctIcon);

    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",ui.incorrectIcon);
    }

    for(let i=0 ; i < ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add("disabled");
    }

    ui.btn_next.classList.add("show");
}

function soruSayisiniGoster(soruSayisi, toplamSoru){
    let tag = `<span class="badge bg-warning">${soruSayisi} / ${toplamSoru}</span>`;
    document.querySelector(".question_index").innerHTML = tag;
}



