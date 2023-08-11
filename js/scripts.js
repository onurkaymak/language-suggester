window.addEventListener("load", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log('submitted!', event);
    });
});