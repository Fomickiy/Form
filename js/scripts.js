var telInput = $("#phone"),
  errorMsg = $("#error-msg"),
  validMsg = $("#valid-msg");

// initialise plugin
telInput.intlTelInput({

  allowExtensions: true,
  formatOnDisplay: true,
  autoFormat: true,
  autoHideDialCode: true,
  autoPlaceholder: true,
  defaultCountry: "auto",
  ipinfoToken: "yolo",

  nationalMode: false,
  numberType: "MOBILE",
  //onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  preferredCountries: ['sa', 'ae', 'qa','om','bh','kw','ma'],
  preventInvalidNumbers: true,
  separateDialCode: true,
  initialCountry: "auto",
  geoIpLookup: function(callback) {
  $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
    var countryCode = (resp && resp.country) ? resp.country : "";
    callback(countryCode);
  });
},
   utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js"
});

var reset = function() {
  telInput.removeClass("error");
  errorMsg.addClass("hide");
  validMsg.addClass("hide");
};

// on blur: validate
telInput.blur(function() {
  reset();
  if ($.trim(telInput.val())) {
    if (telInput.intlTelInput("isValidNumber")) {
      validMsg.removeClass("hide");
    } else {
      telInput.addClass("error");
      errorMsg.removeClass("hide");
    }
  }
});

// on keyup / change flag: reset
telInput.on("keyup change", reset);





  $(".select__check-country-tag").select2({
		placeholder: "Укажите страну поездки", //placeholder
		tags: true,
		tokenSeparators: ['/',',',';'," "] 
	});
   $(".select-country__drop-box").click(function(){
	  $(".select-country__drop-box").addClass("visible");  		  
});  
   $(".quick_tags-country ul li").click(function(){ //Quick country items
	  $(".select2-search.select2-search--inline").addClass("hide");  	  
	  $(".select2-search__field").removeAttr("placeholder"); 
	   $(this).appendTo('.select2-selection__rendered');	  
});  

	jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".select-country__drop-box"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.select-country__drop-box.visible').removeClass('visible');
		}
	});
});	
 
 // Iterate over each select element
$('.drop__select-main-box select').each(function () {

    // Cache the number of options
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

    // Hides the select element
    $this.addClass('s-hidden');

    // Wrap the select element in a div
    $this.wrap('<div class="select"></div>');

    // Insert a styled div to sit over the top of the hidden select element
    $this.after('<div class="styledSelect"></div>');

    // Cache the styled div
    var $styledSelect = $this.next('div.styledSelect');

    // Show the first select option in the styled div
    $styledSelect.text($this.children('option').eq(0).text());

    // Insert an unordered list after the styled div and also cache the list
    var $list = $('<ul />', {
        'class': 'options'
    }).insertAfter($styledSelect);

    // Insert a list item into the unordered list for each select option
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    // Cache the list items
    var $listItems = $list.children('li');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.styledSelect.active').each(function () {
            $(this).removeClass('active').next('ul.options').hide();
        });
        $(this).toggleClass('active').next('ul.options').toggle();
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        /* alert($this.val()); Uncomment this for demonstration! */
    });

    // Hides the unordered list when clicking outside of it
    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});

   $(".select__language-label").click(function(){
	  $(".drop__menu-language").toggleClass("visible");  		  
});  
    $(".more__read-about-rest,.more__details-info").click(function(){
	  $(".modal__overlay,.modal__about-rest").toggleClass("visible");  		  
});   
    $(".modal__close").click(function(){
	  $(".modal__overlay,.modal__about-rest").removeClass("visible");  		  
});   
















    $(".present-section span").click(function(){
	  $(".present-section div").toggleClass("visible");  	
	  $(".present-section span").toggleClass("check");  	
});    
$(".mobile__button").click(function(){
	  $(".mobile__button").toggleClass("check");  	
	  $(".site__navigation").toggleClass("visible");  	
	  $(".search__button").removeClass("check");  	
	  $(".search__conteiner").removeClass("visible");  		  
}); 
$(".search__button").click(function(){
	  $(".mobile__button").removeClass("check");  	
	  $(".site__navigation").removeClass("visible");  		
	  $(".search__button").toggleClass("check");  	
	  $(".search__conteiner").toggleClass("visible");  	
}); 
   