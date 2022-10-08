function show(text){
    console.log(text);
}


$(document).ready(function(){



$(".pic > div:gt(0)").hide();

setInterval(function(){
    //aksi yg mau dilakuin 
    $(".pic > div:first")
    .slideUp(500)     // slide up, slide down, fade in, fade out
    .next()
    .slideDown(500)
    .end()
    .appendTo(".pic")

}, 2000 );

$(".pic2 > div:gt(0)").hide();

setInterval(function(){
    //aksi yg mau dilakuin 
    $(".pic2 > div:first")
    .slideUp(500)     // slide up, slide down, fade in, fade out
    .next()
    .slideDown(500)
    .end()
    .appendTo(".pic2")

}, 2000 );


$(".pic3 > div:gt(0)").hide();

setInterval(function(){
    //aksi yg mau dilakuin 
    $(".pic3 > div:first")
    .slideUp(500)     // slide up, slide down, fade in, fade out
    .next()
    .slideDown(500)
    .end()
    .appendTo(".pic3")

}, 2000 );



$(".pic4 > div:gt(0)").hide();

setInterval(function(){
    //aksi yg mau dilakuin 
    $(".pic4 > div:first")
    .slideUp(500)     // slide up, slide down, fade in, fade out
    .next()
    .slideDown(500)
    .end()
    .appendTo(".pic4")

}, 2000 );



$(".pic5 > div:gt(0)").hide();

setInterval(function(){
    //aksi yg mau dilakuin 
    $(".pic5 > div:first")
    .slideUp(500)     // slide up, slide down, fade in, fade out
    .next()
    .slideDown(500)
    .end()
    .appendTo(".pic5")

}, 2000 );

});