$(document).ready(function() {
    $(function() {
        $("#slide-wrap").responsiveSlides({nav: true});
    });
    $("#slide-wrap").responsiveSlides({
        auto: false,
        pager: false,
        nav: false,
        speed: 500,
    });

    $("#carousel-wrap img").each(function(){
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

    $(function() {
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
    });

    function addTooltip(date) {
        if (date.getDay() == 0){
            return [false,"","Venue Closed"];
        }
        else{
            return [true, ""];
        }
    }

    $('#carousel-wrap').carouFredSel({
        auto: false,
        width   : 830,
        height: 127,
        prev: '#left-arrow',
        next: '#right-arrow',
        mousewheel: true,
        swipe: {
            onMouse: true,
            onTouch: true
        }
    });

});