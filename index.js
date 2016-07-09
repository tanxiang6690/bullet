$(function() {
    for (var i = 0; i < 1000; i++) {
        var w = Math.floor(Math.random() * 4 + 3);
        var b = Math.floor(Math.random() * 100 + 155);
        var left = Math.floor(Math.random() * $(document).width());
        var top = Math.floor(Math.random() * $(document).height());
        $("<div>")
            .addClass("zidan")
            .width(w)
            .height(w)
            .css({
                backgroundColor: 'rgba(41,41,' + b + ',0.4)'
            })
            .appendTo('body')
            .delay(i * 10)
            .animate({
                left: left,
                top: top
            })
    }
})
    