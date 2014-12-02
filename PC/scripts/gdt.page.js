
require.config({
    baseUrl: "/scripts",
    paths: {
        jquery: "jquery.min",
        _: "gdt.plugins",
        slick: "slick.min"
    },
    shim: {

    }
});

require(["jquery", "_", "slick"], function ($, _, slick) {
    /*************************************
    * name		: PagesInit
    * content	: 各页面调用函数
    ************************************/
    var PagesInit = {
        // 所有页面调用
        all: function (opt) {
            var _opt = opt,
			_curNavIndex = _opt.curNavIndex,
            _curSideBarIndex = _opt.curSideBarIndex,
            _curTabIndex = _opt.curTabIndex;

            $.navInit(_curNavIndex); // 主导航栏初始化

            $.sideBarInit(_curSideBarIndex); // 侧栏初始化

            $.curTab(_curTabIndex);

            $.defaultTxt();

        },

        // 用户主页调用
        u_index: function () {
            $('.single-item').slick({
                dots: true,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear',
                autoplay: true,
                autoplaySpeed: 5000
            });
        },
        u_trianC: function () {

        },
        u_conver: function (_opt) {

        },
        u_info: function (_opt) {

        },
        u_noti: function (_opt) {

        }
    };


    /*************************************
    * name		: use
    * content	: 调用函数
    ************************************/
    $(document).ready(function () {
        var _optArr = $.curPageInfo($(".user")); // 当前页信息

        switch (_optArr[0]) {
            case "1":
                PagesInit.u_index();
                break;
            case "2":

                break;
            case "3":
                break;
            case "4":

                break;
            case "7":

                break;
        }

        PagesInit.all({
            curNavIndex: parseInt(_optArr[0]),
            curSideBarIndex: parseInt(_optArr[1]),
            curTabIndex: parseInt(_optArr[2])
        });
    });
});

