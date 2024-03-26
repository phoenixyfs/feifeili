//@prepros-prepend aos.js



// Resize Logo when scroll

// $(document).ready(function () {
//     $(window).scroll(function () {
//       $(".main-header").toggleClass("main-header-shrink", $(this).scrollTop() > 40)
//     });
// });

$(document).ready(function () {
    $(window).scroll(function () {
        $(".logo").toggleClass("logo-shrink", $(this).scrollTop() > 20)
    });
});