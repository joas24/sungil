var col = {
    body: function (color, color2) {
        $('body').css('backgroundColor', color);
        $('body').css('color', color2);
        // document.querySelector('body').style.backgroundColor = color;
        // document.querySelector('body').style.color = color2;            
    },
    a: function (color) {
        var aa = document.querySelectorAll('a');

        for (var i = 0; i < aa.length; i++) aa[i].style.color = color;
    }
}