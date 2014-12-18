define(["jquery", "slick.min"], function () {
    /*?
    * name      : jQuery.loreal_curPageInfo(param)
    * content   : 获取当前页面信息
    **/
    jQuery.curPageInfo = function (obj) {
        var _thisPageInfo = jQuery(obj),
            _curPage = _thisPageInfo.attr("curPage");
        return _curPage.split("_");
    }

    /*?
    * name      : jQuery.loreal_navInit(param)
    * content   : 初始化主导航栏
    **/
    jQuery.navInit = function (index) {
        var _nav = jQuery("#nav"),
            _item = _nav.find(".np_item");
        _item.removeClass("current");
        _item.eq(index - 1).addClass("current");
    }

    /*?
    * name      : jQuery.loreal_sideBarInit(param)
    * content   : 初始化侧导航栏
    **/
    jQuery.sideBarInit = function (index) {
        var _nav = jQuery("#sideBar"),
            _item = _nav.find(".item");

        _item.removeClass("current");
        _item.eq(index - 1).addClass("current");
    }

    /*?
    * name      : jQuery.loreal_curTab(param)
    * content   : 初始化侧导航栏
    **/
    jQuery.curTab = function (index) {
        var _nav = jQuery("#tabCon"),
            _item = _nav.find(".item");

        _item.removeClass("current");
        _item.eq(index - 1).addClass("current");
    }

    /**
    * name    : jQuery.defaultTxt()
    * time    : 2014-6-5
    */
    jQuery.defaultTxt = function () {
        var _defaultTxt = jQuery("input[defaultTxt]");


        _defaultTxt
            .each(function () {
                var _that = jQuery(this),
                    _txt = _that.attr("defaultTxt");

                if (_that.attr("type") == "password") {
                    _that.wrap("<div class='wrap' style=width:'" + _that.outerWidth() + ";height:" + _that.outerHeight() + ";'></div>");
                    var _wrap = _that.parent();
                    _wrap.append("<span class='wrapTxt'>" + _txt + "</span>");

                    var _wrapTxt = _that.parent().find(".wrapTxt");


                    _wrapTxt.bind("click", function () {
                        if (jQuery.trim(_txt) == jQuery.trim(_that.next()[0].firstChild.nodeValue)) {
                            _that.next().text("");
                            _that.focus();
                        }
                    });

                    _that.focus(function () {
                        if (jQuery.trim(_txt) == jQuery.trim(_that.next()[0].firstChild.nodeValue)) {
                            _that.next().text("");
                        }
                    });

                    _that.blur(function () {
                        if (_that.attr("value") == _txt || _that.attr("value").replace(/\s+/g, "").length <= 0) {
                            _that.next().text(_txt);
                        }
                    });


                }

                else {
                    _that.attr("value", _txt);
                    _that.focus(function () {
                        if (_that.attr("value") == _txt) {
                            _that.attr("value", "");
                        }
                    });

                    _that.blur(function () {
                        if (_that.attr("value") == _txt || _that.attr("value").replace(/\s+/g, "").length <= 0) {
                            _that.attr("value", _txt);
                        }
                    });
                }

            });
    }
    /*?
    * name      : jQuery.slick
    * content   : banner滚动
    **/
    jQuery.slick = function () {
        jQuery('.single-item').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000
        });
    }

    /*?
    * name     : jQuery(node).tab() 
    * param    : TabInitName          : 初始化tab,决定哪个选项卡先展开（默认展开第一个选项卡）
    *            extendChangeTab      : 扩展change.tab自定义事件 
    * 
    * author   : mo
    */
    jQuery.fn.tab = function (_opt) {
        var _default = {};
        var _opt = jQuery.extend(_default, _opt);
        var _extendFunc = {};

        this.each(function () {
            var _that = jQuery(this),
                        _tabHead = _that.find(".tabHead"),
                        _tabBody = _that.find(".tabBody");

            //change.tab自定义事件
            _that.bind("change.tab", function (e, tabName) {
                _tabHead.find(">[data-tab='" + tabName + "']").addClass("active").siblings().removeClass("active");
                _tabBody.find(">[data-tab='" + tabName + "']").removeClass("fn_hide").siblings().addClass("fn_hide");
            });

            //绑定tab点击事件，并触发change.tab自定义事件
            _tabHead.delegate(">[data-tab]", "click", function () {
                var _tabName = jQuery(this).attr("data-tab");
                _that.trigger("change.tab", _tabName);
            });

            //扩展change.tab自定义事件
            if (_opt.extendChangeTab) {
                for (var obj in _opt.extendChangeTab) {
                    (function () {
                        var _func = obj;
                        _that.bind("change.tab", function (e, tabName) {
                            _opt.extendChangeTab[_func]();
                        });
                    })();

                }
            }

            _that.trigger("change.tab", _opt.TabInitName || _tabHead.find(">[data-tab]").eq(0).attr("data-tab")); //若没有定义TabInitName值，默认初始化第一个值

        });
    }

    return jQuery;
});

