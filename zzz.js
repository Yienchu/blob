// Ensure jQuery is loaded correctly
$(document).ready(function () {
    $("#messageState").on("change", function() {
        const message = $(".message");
        const heart = $(".heart");
        const container = $(".container");

		if ($("#messageState").is(":checked")) {
            // When checkbox is checked, show the message with animation
            message.addClass("openNor");
            heart.removeClass("closeHer").removeClass("openedHer").addClass("openHer");
            container.stop().animate({"backgroundColor": "#f48fb1"}, 2000);
            console.log("Message Opened");
        } else {
            // When checkbox is unchecked, hide the message with animation
            message.removeClass("openNor");
            heart.removeClass("openHer").removeClass("openedHer").addClass("closeHer");
            container.stop().animate({"backgroundColor": "#fce4ec"}, 2000);
            console.log("Message Closed");
        }
    });
})
