var col = {
    body: function (color, color2) {
        $('body').css('backgroundColor', color);
        $('body').css('color', color2);      
    },

    a: function (color) {
        var aa = document.querySelectorAll('a');

        for (var i = 0; i < aa.length; i++) aa[i].style.color = color;
    },
    
    bt: function(color, color2){
        $('#bt').css('backgroundColor', color);
        $('#bt').css('color', color2);
    }
}
