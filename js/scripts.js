function calculator(event) {
    event.preventDefault();

    const question1 = document.querySelector("input[name='question-1']:checked");
    const question2 = document.querySelector("input[name='question-2']:checked");
    const question3 = document.querySelector("input[name='question-3']:checked");
    const question4 = document.querySelector("input[name='question-4']:checked");
    const question5 = document.querySelector("input[name='question-5']:checked");


}







window.addEventListener("load", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", calculator);
});