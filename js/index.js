$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });
    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
  
      $('#int').click(
                    function(){             
                        $('#news').load('Introduzione.html');          
        }); 		
});
		function getText(param){    
							var testo;  
						
							$.getJSON('./src/glossary.json', function(json) {
								$.each(json.glossary, function(i, v) {
									if (v.word ==param) {
										document.getElementById(param).setAttribute('data-content',v.definition); 
										
									}
								});
							});
					} 
		function miao(){
			var popover=$('.glossar').data('bs.popover');
										popover.setContent();
		}			

    function getTitle(){
      return "La wiki di SWE";
    }