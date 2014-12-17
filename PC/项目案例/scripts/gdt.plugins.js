/*?
 * name      : $.loreal_curPageInfo(param)
 * content   : 获取当前页面信息
 **/
(function(){
    $.curPageInfo = function(obj){
        var _thisPageInfo = $(obj),
            _curPage = _thisPageInfo.attr("curPage");
        return _curPage.split("_");           
    }
})();

/*?
 * name      : $.loreal_navInit(param)
 * content   : 初始化主导航栏
 **/
(function ($) {
    $.navInit = function (index) {
        var _nav = $("#nav"),
            _item = _nav.find(".np_item"); 
        _item.removeClass("current");
        _item.eq(index-1).addClass("current");
    }
})(jQuery);

/*?
 * name      : $.loreal_sideBarInit(param)
 * content   : 初始化侧导航栏
 **/
(function ($) {
    $.sideBarInit = function (index) {
        var _nav = $("#sideBar"),
            _item = _nav.find(".item");

        _item.removeClass("current");
        _item.eq(index-1).addClass("current");
    }
})(jQuery);

/*?
 * name      : $.loreal_curTab(param)
 * content   : 初始化侧导航栏
 **/
(function ($) {
    $.curTab = function (index) {
        var _nav = $("#tabCon"),
            _item = _nav.find(".item");

        _item.removeClass("current");
        _item.eq(index-1).addClass("current");
    }
})(jQuery);

/**
    * name    : $.defaultTxt()
    * time    : 2014-6-5
    */
    (function () {
        $.defaultTxt = function(){
            var _defaultTxt = $("input[defaultTxt]");


        _defaultTxt
            .each(function(){
                var _that = $(this),
                    _txt = _that.attr("defaultTxt");

                    if(_that.attr("type")=="password"){
                        _that.wrap("<div class='wrap' style=width:'"+_that.outerWidth()+";height:"+_that.outerHeight()+";'></div>");
                        var _wrap = _that.parent();
                        _wrap.append("<span class='wrapTxt'>"+_txt+"</span>");

                        var _wrapTxt = _that.parent().find(".wrapTxt");


                        _wrapTxt.bind("click",function(){
                            if($.trim(_txt) == $.trim(_that.next()[0].firstChild.nodeValue)){
                                _that.next().text("");
                                _that.focus();
                            }
                        });

                        _that.focus(function(){
                            if($.trim(_txt) == $.trim(_that.next()[0].firstChild.nodeValue)){
                                _that.next().text("");
                            }
                        });

                        _that.blur(function(){
                            if(_that.attr("value") ==_txt||_that.attr("value").replace(/\s+/g,"").length<=0){
                                _that.next().text(_txt);
                            }
                        });


                    }

                    else{
                        _that.attr("value",_txt);
                        _that.focus(function(){
                            if(_that.attr("value") == _txt){
                                _that.attr("value","");
                            }
                        });

                        _that.blur(function(){
                            if(_that.attr("value") ==_txt||_that.attr("value").replace(/\s+/g,"").length<=0){
                                _that.attr("value",_txt);
                            }
                        });
                    }

            });
        }
})();

/**
* name    : $.poWindow()
* time    : 2014-9-16
*/
(function($){
    $.fn.poWindow = function(){
        this.each(function(){
            var _that = $(this),
                _closeBtn = _that.find(".closeBtn");
            var _winH = $(window).height(),
                _winW = $(window).width();
            _that.fadeIn();
            $("body").append('<div class="pop_bg" style="height:'+_winH+'px;width:'+_winW+'px;"></div>');

            _closeBtn.bind("click",function(){
                _that.fadeOut();
                $(".pop_bg").fadeOut(function(){$(".pop_bg").remove();});
            });

        });
    }
})(jQuery);