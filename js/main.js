;$(function()
  {

    'use strict';
    var sidebar=$('#SideBar'),
     sidebar_trigger=$('#menubotton'),
     mask=$('#Mask'),
     currYear = (new Date()).getFullYear(),
   	 opt={};
     opt.date = {preset : 'date'};
     opt.datetime = {preset : 'datetime'};
     opt.time = {preset : 'time'};
     opt.default = {
       theme: 'android-ics light', //皮肤样式
       display: 'modal', //显示方式
       mode: 'scroller', //日期选择模式
       dateFormat: 'yyyy-mm-dd',
       lang: 'zh',
       showNow: true,
       nowText: "今天",
       startYear: currYear - 50, //开始年份
       endYear: currYear + 10 //结束年份
     };
     function showSideBar()
     {
         sidebar.css('left',0);
         mask.fadeIn();
     }
     function hideSideBar()
     {
       sidebar.css('left',-sidebar.width());
       mask.fadeOut();
     }
    sidebar_trigger.on('click',showSideBar);
    mask.on('click',hideSideBar);
    $("#USER_AGE").mobiscroll($.extend(opt['date'], opt['default']))
  })
