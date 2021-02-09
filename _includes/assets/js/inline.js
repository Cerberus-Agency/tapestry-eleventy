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

        if($("#site-navigation").hasClass("is-active")){
            $(".side-filter")[0].style.display = "hidden !important";
            console.log($(".side-filter")[0].style.display)
        } else {
            $(".side-filter")[0].style.display = "block !important";
            console.log($(".side-filter")[0].style.display)
        }
    });


    $(document).on('change', '#chair-covers', function() {
        var category = $(this).val();
        console.log(category);
        $.get('/rentals/chair-covers/' + category + '/index.html', function(data) {
            $('#results').html(data);
            $('.grid-container').magnificPopup({
                type: 'image',
                delegate: 'a',
                gallery: {
                    enabled: true,
                    preload: [0, 2],
                    navigateByImgClick: true,
                    arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                    tPrev: 'Previous (Left arrow key)',
                    tNext: 'Next (Right arrow key)',
                    tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
                },
                image: {
                    markup: '<div class="mfp-figure">' +
                            '<div class="mfp-close"></div>' +
                            '<div class="mfp-img"></div>' +
                            '<div class="mfp-bottom-bar">' +
                            '<div class="mfp-title"></div>' +
                            '<div class="mfp-counter"></div>' +
                            '</div>' +
                            '</div>',
                    titleSrc: 'title',
                    verticalFit: true,
                    tError: '<a href="%url%">The image</a> could not be loaded.'
                }
            });
        });
    });

    $(document).on('change', '#table-linens', function() {
        var category = $(this).val();
        console.log(category);
        $.get('/rentals/table-linens/' + category + '/index.html', function(data) {
            $('#results').html(data);
            $('.grid-container').each(function() {
                $(this).magnificPopup({
                    type: 'image',
                    delegate: 'a',
                    gallery: {
                        enabled: true,
                        preload: [0, 1],
                        navigateByImgClick: true,
                        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                        tPrev: 'Previous (Left arrow key)',
                        tNext: 'Next (Right arrow key)',
                    },
                    image: {
                        markup: '<div class="mfp-figure">' +
                                '<div class="mfp-close"></div>' +
                                '<div class="mfp-img"></div>' +
                                '<div class="mfp-bottom-bar">' +
                                '<div class="mfp-title"></div>' +
                                '<div class="mfp-counter"></div>' +
                                '</div>' +
                                '</div>',
                        titleSrc: 'title',
                        verticalFit: true,
                        tError: '<a href="%url%">The image</a> could not be loaded.'
                    }
                });
            });
        });
    });

    /******* Rental Page Filter Function *******/

    $("#filter-button").click(function (){
        if($(".side-filter").css("left") === "0px"){
            $(".side-filter").css("left", "-357px");
        } else {
            $(".side-filter").css("left", "0px");
        }
    });

    $("#x").click(function (){
        $(".side-filter").css("left", "-357px");
    });

    
    function turnOffChairCovers (){
        var counter = 0;
        $(".cc-rent").each(function(){
            var checked = $(this).is(":checked");
            if(checked){
                counter++;
            }
        });
        if(counter === 0){
            return false;
        }
    };
    
    $("#chair-covers-rent").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === false){
            $("#spandex-rouched").prop("checked", false);
            $("#spandex-fitted").prop("checked", false);
            $("#universal-wrap-lamoure").prop("checked", false);
        }
    });
    
    $("#spandex-rouched").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === true){
            $("#chair-covers-rent").prop("checked", true);
        } else if (turnOffChairCovers() === false){
            $("#chair-covers-rent").prop("checked", false);
        }
    });
    
    $("#spandex-fitted").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === true){
            $("#chair-covers-rent").prop("checked", true);
        }  else if (turnOffChairCovers() === false){
            $("#chair-covers-rent").prop("checked", false);
        }
    });
    
    $("#universal-wrap-lamoure").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === true){
            $("#chair-covers-rent").prop("checked", true);
        }  else if (turnOffChairCovers() === false){
            $("#chair-covers-rent").prop("checked", false);
        }
    });
    
    function turnOffTableLinens (){
        var counter = 0;
        $(".tl-rent").each(function(){
            var checked = $(this).is(":checked");
            if(checked){
                counter++;
            }
        });
        if(counter === 0){
            return false;
        }
    };
    
    $("#table-linens-rent").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === false){
            $("#bengaline-moire").prop("checked", false);
            $("#crinkles").prop("checked", false);
            $("#bichon-satin").prop("checked", false);
            $("#damasks").prop("checked", false);
            $("#glitz-sequins").prop("checked", false);
            $("#lame").prop("checked", false);
            $("#lamour").prop("checked", false);
            $("#pintucks").prop("checked", false);
            $("#poly-cotton-blend").prop("checked", false);
            $("#sheers").prop("checked", false);
            $("#spandex").prop("checked", false);
            $("#taffeta").prop("checked", false);
            $("#tinsels").prop("checked", false);
            $("#velvet").prop("checked", false);
        }
    });
    
    $("#bengaline-moire").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === true){
            $("#table-linens-rent").prop("checked", true);
        } else if (turnOffTableLinens() === false){
            $("#table-linens-rent").prop("checked", false);
        }
    });
    
    $("#crinkles").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === true){
            $("#table-linens-rent").prop("checked", true);
        } else if (turnOffTableLinens() === false){
            $("#table-linens-rent").prop("checked", false);
        }
    });
    
    $("#bichon-satin").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === true){
            $("#table-linens-rent").prop("checked", true);
        } else if (turnOffTableLinens() === false){
            $("#table-linens-rent").prop("checked", false);
        }
    });
    
    $("#damasks").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === true){
            $("#table-linens-rent").prop("checked", true);
        } else if (turnOffTableLinens() === false){
            $("#table-linens-rent").prop("checked", false);
        }
    });
    
    $("#glitz-sequins").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === true){
            $("#table-linens-rent").prop("checked", true);
        } else if (turnOffTableLinens() === false){
            $("#table-linens-rent").prop("checked", false);
        }
    });
    
    $("#lame").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === true){
            $("#table-linens-rent").prop("checked", true);
        }  else if (turnOffTableLinens() === false){
            $("#table-linens-rent").prop("checked", false);
        }
    });
    
    $("#lamour").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === true){
            $("#table-linens-rent").prop("checked", true);
        }  else if (turnOffTableLinens() === false){
            $("#table-linens-rent").prop("checked", false);
        }
    });
    
    $("#pintucks").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === true){
            $("#table-linens-rent").prop("checked", true);
        }  else if (turnOffTableLinens() === false){
            $("#table-linens-rent").prop("checked", false);
        }
    });
    
    $("#poly-cotton-blend").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === true){
            $("#table-linens-rent").prop("checked", true);
        }  else if (turnOffTableLinens() === false){
            $("#table-linens-rent").prop("checked", false);
        }
    });
    
    $("#sheers").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === true){
            $("#table-linens-rent").prop("checked", true);
        }  else if (turnOffTableLinens() === false){
            $("#table-linens-rent").prop("checked", false);
        }
    });
    
    $("#spandex").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === true){
            $("#table-linens-rent").prop("checked", true);
        }  else if (turnOffTableLinens() === false){
            $("#table-linens-rent").prop("checked", false);
        }
    });
    
    $("#taffeta").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === true){
            $("#table-linens-rent").prop("checked", true);
        }  else if (turnOffTableLinens() === false){
            $("#table-linens-rent").prop("checked", false);
        }
    });
    
    $("#tinsels").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === true){
            $("#table-linens-rent").prop("checked", true);
        }  else if (turnOffTableLinens() === false){
            $("#table-linens-rent").prop("checked", false);
        }
    });
    
    $("#velvet").click(function (){
        console.log($(this).is(":checked"))
        var checked = $(this).is(":checked");
        if(checked === true){
            $("#table-linens-rent").prop("checked", true);
        }  else if (turnOffTableLinens() === false){
            $("#table-linens-rent").prop("checked", false);
        }
    });
    
    const filterValues = ["chair-covers", "table-linens", "rent-spandex-rouched", "rent-spandex-fitted", "rent-universal-wrap", "rent-chair-accessories", "rent-bengaline-moire", "rent-bichon-satin", "rent-crinkles", "rent-damasks", "rent-glitz-sequins", "rent-lame", "rent-lamour", "rent-pintucks", "rent-poly-cotton-blend", "rent-sheers", "rent-spandex", "rent-taffeta", "rent-tinsels", "rent-velvet", "rent-table-accessories"];

    function getRentalResults (){
        var searchValues = new Array();
        $("input[type=checkbox]").each(function (){
            if($(this).is(":checked")){
                    searchValues.push($(this).val());
            }
        });
        filterValues.forEach(category => {
           if(searchValues.includes(category)){
                $("#" + category + ":hidden").show();
           } else {
                $("#" + category + ":visible").hide();
           }
        })
        console.log(searchValues);
    };
    
    $("#rent-submit").click(function (){
        $(".side-filter").css("left", "-357px");
        getRentalResults();
    });

    $("#chair-accessories-setting").click(function(){
        console.log("yes")
        setTimeout(function (){
            $("input[type=checkbox]").each(function (){
                $(this).prop("checked", false);
            });
            $(".rent-chair-accessories").prop("checked", true);
            getRentalResults();
        }, 1000);    
    });
});