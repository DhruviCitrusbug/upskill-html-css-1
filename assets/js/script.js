$(document).ready(function () {
    $(".faq-card").click(function () {
        let answerSection = $(this).find(".faq-answer");
        let button = $(this).find("#faq-btn");
        let icon = button.find("img");
        if ($(this).hasClass("faq-card-active")) {
            $(this).removeClass("faq-card-active");
            answerSection.slideUp();
            icon.css("transform", "rotate(90deg)");
        }
        else {
            $(this).addClass("faq-card-active");
            answerSection.slideDown();
        }
    });
});