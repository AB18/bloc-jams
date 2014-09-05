 var tabsContainer = ".user-profile-tabs-container"
 var selectTabHandler = function(event) {
   // console.log(event);
   // console.log(this);
   $tab = $(this);
   $(tabsContainer + " li").removeClass('active');
   // console.log($tab.parent());
   $tab.parent().addClass('active');
   selectedTabName = $tab.attr('href');
   console.log(selectedTabName);
   $(".tab-pane").addClass('hidden');
   $(selectedTabName).removeClass('hidden');
   event.preventDefault();
 };
 
 if (document.URL.match(/\/profile.html/)) {
   $(document).ready(function() {
     var $tabs = $(tabsContainer + " a");
     $tabs.click(selectTabHandler);
     $tabs[0].click();
   });
 }