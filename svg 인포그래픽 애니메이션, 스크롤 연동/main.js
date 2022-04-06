$(function(){

    var chart = $('.chart');
    var chartOST = chart.offset().top - 500;
    var excuted = false;
    // console.log(excuted);

    $(window).scroll(function(){
        var currentSCT = $(this).scrollTop();

        if(currentSCT >= chartOST){ //스크롤 내릴때마다 이 조건이 계속 실행됨
            if(excuted == false){
                chart.each(function(){
                    var item = $(this);
                    var title = item.find('h2');
                    var targetNum = title.attr('data-num');
                    var circle = item.find('circle');
            
                    $({rate:0}).animate({rate:targetNum}, //애니메이션 메소드는 하등 상관이 없는 요소를 잡아도 상관없다
                        {
                            duration: 2000,
                            progress:function(){
                                var now = this.rate;
                                var amount = 630 - (630*now/100);
                                console.log(now);
                                title.text(Math.floor(now));
                                circle.css({strokeDashoffset:amount});
                        }
                    });
                });  //chart each
                excuted = true;
            }
            
        }
    });

    
});//end