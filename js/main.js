;$(function()
  {

    'use strict';
    var sidebar=$('#SideBar'),
     sidebar_trigger=$('#menubotton'),
     mask=$('#Mask');
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
  })
