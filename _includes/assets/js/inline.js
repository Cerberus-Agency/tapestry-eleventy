if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

var $hamburger = jQuery(".hamburger");
$hamburger.on("click", function(e) {
$hamburger.toggleClass("is-active");
// Do something else, like open/close menu
$("#site-navigation").toggleClass("is-active");
console.log("menu active!");
});

$("#contact-form").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    alert("Thank you!");
  });
});