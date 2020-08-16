(function () {
    $("body").append("<img class='fs14 colorBl' id='goTopButton' style='display: none; z-index: 998; cursor: pointer;' title='回到頂端'/>");
    var img = "images/goTop.png",
        locatioin = 16 / 20, // 按鈕出現在螢幕的高度
        right = 0, // 距離右邊 px 值
        opacity = 0.4, // 透明度
        speed = 600, // 捲動速度
        $button = $("#goTopButton"),
        $body = $(document),
        $win = $(window);
    $button.attr("src", img);
    $button.on({
        mouseover: function () {
            $button.css("opacity", 1);
        },
        mouseout: function () {
            $button.css("opacity", opacity);
        },
        click: function () {
            $("html, body").animate({
                scrollTop: 0
            }, speed);
        }
    });
    window.goTopMove = function () {
        var scrollH = $body.scrollTop(),
            winH = $win.height(),
            css = {
                "top": winH * locatioin + "px",
                "position": "fixed",
                "right": right,
                "opacity": opacity
            };
        if (scrollH > 20) {
            $button.css(css);
            $button.fadeIn("slow");
        } else {
            $button.fadeOut("slow");
        }
    };
    $win.on({
        scroll: function () {
            goTopMove();
        },
        resize: function () {
            goTopMove();
        }
    });
})();