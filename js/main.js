
$(document).ready(function(){
    
    //팝업
    $('.popBg,.popBox').hide();
    $('.popBtn').click(function(){
        $('.popBg,.popBox').fadeIn();
        
        $('.popBg,.close').click(function(){
        $('.popBg,.popBox').fadeOut();
        })
    })
    
    //패널메뉴창
    $('.panelBg,.panelBox').hide();
    $('.panelBtn').click(function(){
        $('.panelBg,.panelBox').fadeIn();
        
        $('.panelBg,.panelclose').click(function(){
        $('.panelBg,.panelBox').fadeOut();
        })
    })
    

//WOW
new WOW().init();
    
});