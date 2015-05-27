Template.home.rendered = function () {
  $("#owl-demo").owlCarousel({
        
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        items : 1,
        paginationSpeed : 400,
        singleItem:true
   
        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
   
   })
};

Template.home.events( {
    'click .active': function(){
        
    }
});