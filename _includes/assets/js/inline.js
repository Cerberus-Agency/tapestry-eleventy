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
    });
  });

    $(document).on('change','#table-linens', function(){
    var category = $(this).val();
    console.log(category);
    $.get('/rentals/table-linens/'+ category +'/index.html', function( data ) {
        $('#results').html(data); 
    });
  });

});