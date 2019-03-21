$(document).ready(function(){

    let turn = 0; // even for player'o', odd for payer 'x'

    $('#board li').on('click', function(){
        if($(this).hasClass('disable')){
            alert('Already filled.');
        }else if(turn%2==0){
            $(this).text('o');
            $(this).addClass('disable o');
        
        }else if(turn%2==1){
            $(this).text('x');
            $(this).addClass('disable x');
        }
        turn++;
    })

    $.fn.reset = function(){
        $('#board li').text('+');
        $('#board li').removeClass('o');
        $('#board li').removeClass('x');
        $('#board li').removeClass('disable');

    }

    $('#reset').on('click', function(){
        $.fn.reset();
    })
})