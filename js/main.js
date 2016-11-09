// ==============================
// Main.js 

$(document).ready(function(){ 

	console.log('DOM READY');
});


//==============
//Smooth scroll===== menu

	var arrow = $("#arrow_scroll")
	console.log(arrow);
    arrow.on("click", function(e) {
        e.preventDefault(); // zatrzymanie domyślnej akcji przeniesienia
        var href = $(this).attr("href");
        // console.log(href);

        // Ważne! Przewijanie dokumentu
        $('html, body').animate({
            scrollTop: $(href).offset().top
            }, 2000);
    });

//==============
// //Smooth scroll do góry strony

//     var arrow_up = $("#arrow_scroll_up")
// 	console.log(arrow_up);
//     arrow_up.on("click", function(e) {
//         e.preventDefault(); // zatrzymanie domyślnej akcji przeniesienia
//         var href = $(this).attr("href");
//         // console.log(href);

//         // Ważne! Przewijanie dokumentu
//         $('html, body').animate
//         ({
//             scrollTop: 0 }, 2000, function() {
// 			arrow_up.addClass("hide"); 
//             });
//     });

// //==============
// //Pojawianie się kotwicy
// 	var $win = $(window);
//     var winH = $win.height();
// 	$(window).scroll(function() {
//     if ($(window).scrollTop() > winH) {
//         //console.log(arrow_up);
//         arrow_up.removeClass('hide')

//     }
//     else {
//         arrow_up.addClass('hide')
//     }
// });

 
$(window).load(function() {
 
  	console.log('HTML , CSS , JS , IMG READY');
});