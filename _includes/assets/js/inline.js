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
jQuery("#site-navigation").toggleClass("is-active");
console.log("menu active!");
});