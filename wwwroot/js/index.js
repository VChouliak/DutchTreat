$(document).ready(() => {
    const messageForm = $("#messageForm");
    const buyButton = $("#buyButton");
    const productInfo = $(".product-props li");
    const loginToggle = $("#loginToggle");
    const popupForm = $(".popup-form");

    messageForm.hide();

    buyButton.on("click", () => {
        alert("Is buied!!!");
    });

    productInfo.on("click", () => {
        console.log("you clicked on " + $(this).text());
    });

    loginToggle.on("click", function () {
        popupForm.toggle(1000);
    });
}
);
