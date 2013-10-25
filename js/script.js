$(document).ready(function() {
    $(function() {
        $(".slide-wrap").responsiveSlides({nav: true});
    });
    $(".slide-wrap").responsiveSlides({
        auto: false,
        pager: false,
        nav: false,
        speed: 500
    });

    $(".carousel-wrap img").each(function(){
        var src = $(this).attr('src');
        $(this).mouseover(function(){
            var nsrc = src.substr(0,src.length - 4);
            $(this).attr('src',nsrc + '-hover.png')
        });
        $(this).mouseout(function(){
            $(this).attr('src',src)
        });
    });

    $("#datepicker").tooltip({
        position: {
            my: "center+1 bottom+70",
            at: "center top",
            using: function (position, feedback) {
                $(this).css(position);
                $("<div>")
                    .addClass("arrow")
                    .addClass(feedback.vertical)
                    .addClass(feedback.horizontal)
                    .appendTo(this);
            }
        }
    });

    /*$(function() {
        var Event = function(text, className) {
            this.text = text;
            this.className = className;
        };
        var events = {};
        events[new Date("10/25/2013")] = new Event("Test", "mark");
        events[new Date("10/10/2013")] = new Event("Test Again", "mark");
        $("#datepicker").datepicker({
            dateFormat: 'dd/mm/yy',
            showOn: "both",
            beforeShowDay: function(date) {
                var event = events[date];
                if (event) {
                    return [true, event.className, event.text];
                }
                else {
                    return [true, '', ''];
                }
            }
        });
    });*/

    $('#datepicker').datepicker({
        inline: true,
        beforeShowDay:  iventsDays
    });

    $('#datepicker').find('.ui-datepicker-calendar').tooltip({
        track: false,
        delay: 0,
        showURL: false,
        fade: 200,
        position: {
            my: "center+1 bottom+70",
            at: "center top",
            using: function (position, feedback) {
                $(this).css(position);
                $("<div>")
                    .addClass("arrow")
                    .addClass(feedback.vertical)
                    .addClass(feedback.horizontal)
                    .appendTo(this);
            }
        }
    });

    $(".mark span").wrap("<div class='wr'></div>");

    function iventsDays(date) {
        var ivenDays = ["14","19"];
        var sDate = date.getDate().toString();
        if (jQuery.inArray(sDate, ivenDays) !== -1) {return [false,"mark", "Test"];}
        else  return [true, ""];

    }

    $('.carousel-wrap').carouFredSel({
        auto: true,
        width   : "100%",
        height: 127,
        responsive: true,
        items: {
            visible: {
                min: 1,
                max: 5
            }},
        prev: '.left-arrow',
        next: '.right-arrow',
        mousewheel: true,
        swipe: {
            onMouse: true,
            onTouch: true
        }
    });



        $(".menu-button").click(function(){
            $("nav").slideToggle();
            $(this).toggleClass("open");
            if($(this).hasClass("open")){
                $(this).html(" - Close Menu - ");
            }
            else{
                $(this).html(" - Open Menu - ");
            }
        });

    $( window ).resize(function() {
        if($(this).width() > 463){
            $( "nav" ).css('display', 'table');
        }
        else $( "nav" ).css('display', 'none');
    });


});