const openedCard=[];
//const suf=[];
const parent = $('.game');
let count = 0;
let cardData;
let cardList = parent.children();

while (cardList.length){
    parent.append(cardList.splice(Math.floor(Math.random() *12),1)[0]);
}

function sumCards() {
    if (count > 2){
        $('.card').removeClass('flip');
        count=0;
    };
};

function hideCards(){
    if ($(openedCard)[0]===$(openedCard)[1]){
        setTimeout(() => {
            $('.flip').addClass('hiden-card');
            count=0;
        }, 500);
    };
};

$('.card').click(function (){
    if($(this).hasClass('flip')){
    }else{
    $(this).addClass('flip');
    count++;
    $(cardData = ($(this).data('animals')));
    $(openedCard[count-1] = cardData);
    sumCards();
    hideCards()
    }
})