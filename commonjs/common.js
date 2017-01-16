/**
 * Created by admin on 2016/12/28.
 */
$(function(){
    /*导航条事件*/
    /*$("li.mainnav").click(function () {
        $(this).addClass("hover").siblings().removeClass("hover");
    });
    $(".subnav li").click(function () {
        $(this).parents("li.mainnav").addClass("hover").siblings().removeClass("hover");
    })*/
    /*$("li.mainnav>a").each(function () {
        console.log($(this));
        //console.log(window.location);
        /!*if($(this).attr(href)=String(window.location.pathname)){
            $(this).addClass("hover");
        }*!/

    })*/
    var currentPath=window.location.pathname;
    var curpathArray=currentPath.split("/");
    var cutLocatePath=curpathArray[curpathArray.length-1];
    console.log("当前截取的窗口:"+cutLocatePath);
    $("li.mainnav").children("a").each(function () {
        var href=$(this).attr('href');
        //console.log("123"+$(this));
        var hrefArray=href.split("/");
        var cutHref=hrefArray[hrefArray.length-1];
        console.log("当前截取的href:"+cutHref);
        if(cutHref==cutLocatePath){
            console.log("成功了");
            $(this).addClass("hover");
        }
    });
    $(".backtop").click(function () {
        console.log("aaa");
           //alert($("#header").offset().top);
       //$(window).scrollTop($("#header").offset().top);
        var backdistance=$("#header").offset().top;
        //console.log(backdistance);
        $('body').animate({scrollTop:backdistance},1000,'linear');
    })
});