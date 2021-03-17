let a = 0;
let d=[];
let suf=[]
let f;
let parent = $('.game');
let divs = parent.children();

while (divs.length){
    parent.append(divs.splice(Math.floor(Math.random() *12),1)[0])
}

$('.card').click(function (){
    if($(this).hasClass('flip')){
    }else{
        $(this).addClass('flip')
        a++
        $(f = ($(this).data('animals')));
        $(d[a-1] = f);
        k()
        z()
        function k(){
            if (a > 2){
                $('.card').removeClass('flip')
                a=0;
            }
        }
    }
})
function z(){
    if ($(d)[0]===$(d)[1]){
        setTimeout(() => {
            $('.flip').addClass('hiden-card');
            a=0
        }, 1000)
    }
}

