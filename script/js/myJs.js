const zeroPad = (num, places)=>String(num).padStart(places, '0');
function countdownToTheDesiredTime(year,month,days, hour, minute,second){
    var countDownDate = new Date(year,month-1,days,hour,minute,second).getTime();
    setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("days").innerHTML = zeroPad(days,2);
        document.getElementById("hrs").innerHTML = zeroPad(hours,2);
        document.getElementById("mins").innerHTML = zeroPad(minutes,2);
        document.getElementById("sec").innerHTML = zeroPad(seconds,2);
        if (distance < 0) {
            clearInterval(x);
        }
    }, 1000);
}
function menuMobile() {
    if($(' #nav .container> ul').css("display") == 'none'){
        $(' #nav .container> ul').css("display","block");
        $('#nav').css('position','fixed').css('top','0');
    }
    else{
        $(' #nav .container> ul').css("display","none");
        if($(window).scrollTop() < 200) {
            $('#nav').css('position','relative');
        }
    }
}
function responsive(){
    $('.grid-flex').height($('.grid-flex').width()*0.440);
    if($(window).width() < 450){
        $('.grid-flex-left-title').css({"font-size":"14px"});
        $('.grid-flex-left-sale').css({"font-size":"10px","margin-top":"-5px"});
        $('.container').css("padding","0px 15px");
        $('.carousel-intro-line').css("padding","0px 10px");
        $('.grid-flex').height($('.grid-flex').width()*2.1);
    }
    else if($(window).width() < 767){
        $('.container').css("padding","0px 15px");
        $('.carousel-intro-line').css("padding","0px 10px");
       // $('.img-Donors').height(50);
        $('.grid-flex-left-title').css({"font-size":"22px","margin-top":"-5px"});
        $('.grid-flex-left-sale').css({"font-size":"12px","margin-top":"5px"});
        $('.grid-flex').height($('.grid-flex').width()*2.1);
        $('.middle-row2 .boxx').css({"top":"50%"});
    }else if($(window).width() < 950){
        $('.container').css("padding","0px 15px");
        $('.carousel-intro-line').css("padding","0px 10px");
        $('.grid-flex-left-title').css({"font-size":"20px","margin-top":"-5px"});
        $('.grid-flex-left-sale').css({"font-size":"14px","margin-top":"5px"});

        $('.middle-row2 .boxx').css({"top":"40%"});
    }
    else if($(window).width() < 1140){
        $('.container').css("padding","0px 10px");
        $('.carousel-intro-line').css("padding","0px 10px");
        $('.contact-item-boxtext').css("display","block");
        $('.contact-item').css("width","265px");
        $('.grid-flex-left-title').css({"font-size":"25px","margin-top":"-5px"});
        $('.grid-flex-left-sale').css({"font-size":"16px","margin-top":"5px"});
        $('.middle-row2 .boxx').css({"top":"50%"});
    }
    else{
        $('.container').css("padding","0px 0px");
        $('.carousel-intro-line').css("padding","0px 0px");
        $('.squares-65').width(60);
        $('.squares-65').height(60);
        $('.box-h65-number').css("font-size","21px");
        $('.box-h65-text').css("font-size","12px");
        $('.box-h65').css({"width":"300px","height":"65px"});
        $('.grid-flex-left-title').css({"font-size":"30px"});
        $('.grid-flex-left-sale').css({"font-size":"18px","margin-top":"-6px"});
    }


    if($(window).width() < 950){
        $('.contact-item-boxtext').css("display","none");
        $('.contact-item').css("width","60px");
    }else{
        $('.contact-item-boxtext').css("display","block");
        $('.contact-item').css("width","265px");
        $('.contact-item:nth-child(1)').css("width","260px");
        $('.contact-item:nth-child(2)').css("width","205px");
    }

    if($(window).width() < 655){
        $('.carousel-intro-line p:nth-child(3)').css("margin-top","5px");
        $('.header-content > .title > h2').css({"font-size":"58px","line-height":"58px"});
        $('.header-content > .title > h3:nth-child(2)').css({"font-size":"28px","line-height":"28px","top":"-48px"});
        $('.nav i').css({"font-size":"1.3rem"});

        $('.lastest-news-title > h2').css({"font-size":"58px","line-height":"58px"});
        $('.lastest-news-title > h3').css({"font-size":"28px","line-height":"28px","top":"-48px"});
        $('.icon-payment').css({"height":"17px"});
        $('.latest-news-titlte').css({"font-size":"14px"});
        $('.middle-row2-title').css({"font-size":"12px"});
    }else{
        $('.carousel-intro-line p:nth-child(3)').css("margin-top","55px");
        $('.header-content > .title > h2').css({"font-size":"90px","line-height":"90px"});
        $('.header-content > .title > h3:nth-child(2)').css({"font-size":"42px","line-height":"42px","top":"-72px"});
        $('.nav i').css({"font-size":"2.1rem"});

        $('.lastest-news-title > h2').css({"font-size":"90px","line-height":"90px"});
        $('.lastest-news-title > h3').css({"font-size":"42px","line-height":"42px","top":"-72px"});
        $('.icon-payment').css({"height":"30px"});
        $('.latest-news-titlte').css({"font-size":"16px"});
        $('.middle-row2-title').css({"font-size":"14px"});
    }
    if($(window).width()<906){
        $('.search-form').css({"width":"134%","margin-top":"-40px","margin-bottom":"-15px"});
    }else{
        $('.search-form').css({"width":"100%","margin-top":"0px","margin-bottom":"0px"});
    }
    if($(window).width() < 450){
        $('.header-content > .title > h2').css({"font-size":"35px","line-height":"35px"});
        $('.header-content > .title > h3:nth-child(2)').css({"font-size":"23px","line-height":"23px","top":"-38px"});

        $('.lastest-news-title > h2').css({"font-size":"40px","line-height":"40px"});
        $('.lastest-news-title > h3').css({"font-size":"23px","line-height":"23px","top":"-38px"});
        $('.contact-item').css("width","35px");
        $('.contact-item:nth-child(1)').css("width","35px");
        $('.contact-item:nth-child(2)').css("width","35px");
    }
    if($(window).width() <350){
        $('.squares-65').css({"width":"40px","height":"40px"});
        $('.box-h65-number').css({"font-size":"16px","margin-top":"0px"});
        $('.box-h65-text').css({"font-size":"8px"});
        $('.box-h65').css({"width":"203px"});
        $('.grid-flex-left-title').css({"margin-top":"-30px"});
    }else{
        $('.squares-65').css({"width":"60px","height":"60px"});
        $('.box-h65-number').css({"font-size":"21px","margin-top":"6px"});
        $('.box-h65-text').css({"font-size":"12px"});
        $('.box-h65').css({"width":"280px"});
        $('.grid-flex-left-title').css({"margin-top":"22px"});
    }

    $(window).scroll(function(){
        if($(window).scrollTop() > 200){
            $('#nav').css('position','fixed').css('top','0');
        } else {
            $('#nav').css('position','relative');
        }
        if($(' #nav .container> ul').css("display") == 'block' && $(window).width() < 640){
            $('#nav').css('position','fixed').css('top','0');
        }
    });
    if($(' #nav .container> ul').css("display") == 'block' && $(window).width() < 640){
        $('#nav').css('position','static');
        $(' #nav .container> ul').css("display","none");
    }else if($(window).width() > 640){
        $(' #nav .container> ul').css("display","block");
    }

}

