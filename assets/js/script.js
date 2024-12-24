$(document).ready(function () {
    $(".faq-card").click(function () {
        if ($(this).hasClass("faq-card-active")) {
            $(this).removeClass("faq-card-active");
            $(this).findClass("faq-answer").hide();
        }
        else {
            $(this).addClass("faq-card-active");
        }
    });
});