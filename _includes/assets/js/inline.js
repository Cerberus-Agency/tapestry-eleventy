if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

$(document).ready(function() {
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
    $("#site-navigation").toggleClass("is-active");
    $("#cls-1").toggleClass("is-active");
  });

  $("#contact-form").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      alert("Thank you!");
    });
  });

  $(document).on('change','#chair-covers', function(){
    var category = $(this).val();
    console.log(category);
    $.get('/rentals/chair-covers/'+ category +'/index.html', function( data ) {
        $('#results').html(data); 
        $(this).magnificPopup();
    });
  });

    $(document).on('change','#table-linens', function(){
    var category = $(this).val();
    console.log(category);
    $.get('/rentals/table-linens/'+ category +'/index.html', function( data ) {
        $('#results').html(data); 
        $('.grid-container').magnificPopup({
    type: 'image',
    delegate: 'a',
    image: {
      markup: '<div class="mfp-figure">'+
            '<div class="mfp-close"></div>'+
            '<div class="mfp-img"></div>'+
            '<div class="mfp-bottom-bar">'+
              '<div class="mfp-title"></div>'+
              '<div class="mfp-counter"></div>'+
            '</div>'+
          '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

      cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.

      titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
      // Or the function that should return the title. For example:
      // titleSrc: function(item) {
      //   return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      // }

      verticalFit: true, // Fits image in area vertically

      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        // other options
      },
      gallery:{enabled:true}
    });
    });
  });

  $('.grid-container').magnificPopup({
    type: 'image',
    delegate: 'a',
    image: {
      markup: '<div class="mfp-figure">'+
            '<div class="mfp-close"></div>'+
            '<div class="mfp-img"></div>'+
            '<div class="mfp-bottom-bar">'+
              '<div class="mfp-title"></div>'+
              '<div class="mfp-counter"></div>'+
            '</div>'+
          '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

      cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.

      titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
      // Or the function that should return the title. For example:
      // titleSrc: function(item) {
      //   return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      // }

      verticalFit: true, // Fits image in area vertically

      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        // other options
      },
      gallery:{enabled:true}
    });

});

