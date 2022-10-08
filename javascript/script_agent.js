function show(text){
    console.log(text);
}


$(function(){
   
    let slides = $(".slide");
    slides.hide();
    let currIdx = 0;
    let minIdx = 0;
    let maxIdx = slides.length - 1;
    slides.eq(0).show();

    $("#slide-right").click(()=>{
        slides.eq(currIdx).hide();
        currIdx++;
        if(currIdx > maxIdx) currIdx = minIdx;
        slides.eq(currIdx).show();
    });

    $("#slide-left").click(()=>{
        slides.eq(currIdx).hide();
        currIdx--;
        if(currIdx < minIdx) currIdx = maxIdx;
        slides.eq(currIdx).show();
    });



    let slidez = $(".slide2");
    slidez.hide();
    let currIdx2 = 0;
    let minIdx2 = 0;
    let maxIdx2 = slidez.length - 1;
    slidez.eq(0).show();

    $("#slide-right2").click(()=>{
        slidez.eq(currIdx2).hide();
        currIdx2++;
        if(currIdx2 > maxIdx2) currIdx2 = minIdx2;
        slidez.eq(currIdx2).show();
    });

    $("#slide-left2").click(()=>{
        slidez.eq(currIdx2).hide();
        currIdx2--;
        if(currIdx2 < minIdx2) currIdx2 = maxIdx2;
        slidez.eq(currIdx2).show();
    });


    let slidez3 = $(".slide3");
    slidez3.hide();
    let currIdx3 = 0;
    let minIdx3 = 0;
    let maxIdx3 = slidez3.length - 1;
    slidez3.eq(0).show();

    $("#slide-right3").click(()=>{
        slidez3.eq(currIdx3).hide();
        currIdx3++;
        if(currIdx3 > maxIdx3) currIdx3 = minIdx3;
        slidez3.eq(currIdx3).show();
    });

    $("#slide-left3").click(()=>{
        slidez3.eq(currIdx3).hide();
        currIdx3--;
        if(currIdx3 < minIdx3) currIdx3 = maxIdx3;
        slidez3.eq(currIdx3).show();
    });

    let slidez4 = $(".slide4");
    slidez4.hide();
    let currIdx4 = 0;
    let minIdx4 = 0;
    let maxIdx4 = slidez4.length - 1;
    slidez4.eq(0).show();

    $("#slide-right4").click(()=>{
        slidez4.eq(currIdx4).hide();
        currIdx4++;
        if(currIdx4 > maxIdx4) currIdx4 = minIdx4;
        slidez4.eq(currIdx4).show();
    });

    $("#slide-left4").click(()=>{
        slidez4.eq(currIdx4).hide();
        currIdx4--;
        if(currIdx4 < minIdx4) currIdx4 = maxIdx4;
        slidez4.eq(currIdx4).show();
    });

    let slidez5 = $(".slide5");
    slidez5.hide();
    let currIdx5 = 0;
    let minIdx5 = 0;
    let maxIdx5 = slidez5.length - 1;
    slidez5.eq(0).show();

    $("#slide-right5").click(()=>{
        slidez5.eq(currIdx5).hide();
        currIdx5++;
        if(currIdx5 > maxIdx5) currIdx5 = minIdx5;
        slidez5.eq(currIdx5).show();
    });

    $("#slide-left5").click(()=>{
        slidez5.eq(currIdx5).hide();
        currIdx5--;
        if(currIdx5 < minIdx5) currIdx5 = maxIdx5;
        slidez5.eq(currIdx5).show();
    });

    let slidez6 = $(".slide6");
    slidez6.hide();
    let currIdx6 = 0;
    let minIdx6 = 0;
    let maxIdx6 = slidez6.length - 1;
    slidez6.eq(0).show();

    $("#slide-right6").click(()=>{
        slidez6.eq(currIdx6).hide();
        currIdx6++;
        if(currIdx6 > maxIdx6) currIdx6 = minIdx6;
        slidez6.eq(currIdx6).show();
    });

    $("#slide-left6").click(()=>{
        slidez6.eq(currIdx6).hide();
        currIdx6--;
        if(currIdx6 < minIdx6) currIdx6 = maxIdx6;
        slidez6.eq(currIdx6).show();
    });


});