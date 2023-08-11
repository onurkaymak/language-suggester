function programCalculator() {
    const question1 = document.querySelector("input[name='question-1']:checked");
    const question2 = document.querySelector("input[name='question-2']:checked");
    const question3 = document.querySelector("input[name='question-3']:checked");
    const question4 = document.querySelector("input[name='question-4']:checked");
    const question5 = document.querySelector("input[name='question-5']:checked");

    let javaScript = 0;
    let python = 0;
    let java = 0;
    let cSharp = 0;

    if (question1.value === 'Web Development') {
        javaScript += 1;
    }
    else if (question1.value === 'Data Science') {
        python += 1;
    }
    else if (question1.value === 'Mobile') {
        java += 1;
    }
    else if (question1.value === 'Desktop / Video Game') {
        cSharp += 1;
    }
    else {
        return
    }

    if (question2.value === 'Small business/Freelance') {
        javaScript += 1;
    }
    else if (question2.value === 'Startups') {
        python += 1;
    }
    else if (question2.value === 'No Preference') {
        java += 1;
    }
    else if (question2.value === 'Traditional Enterprises') {
        cSharp += 1;
    }
    else {
        return
    }

    if (question3.value === 'Yellow') {
        javaScript += 1;
    }
    else if (question3.value === 'Green') {
        python += 1;
    }
    else if (question3.value === 'Orange') {
        java += 1;
    }
    else if (question3.value === 'Blue') {
        cSharp += 1;
    }
    else {
        return
    }

    if (question4.value === 'Wolf') {
        javaScript += 1;
    }
    else if (question4.value === 'Turtle') {
        python += 1;
    }
    else if (question4.value === 'Puma') {
        java += 1;
    }
    else if (question4.value === 'Cheetah') {
        cSharp += 1;
    }
    else {
        return
    }

    if (question5.value === "I'm okay to push myself.") {
        javaScript += 1;
    }
    else if (question5.value === 'No challenge please!') {
        python += 1;
    }
    else if (question5.value === 'I drive a Challanger!') {
        java += 1;
    }
    else if (question5.value === 'Nothing scares me anymore!') {
        cSharp += 1;
    }
    else {
        return
    }

    if (javaScript > python && javaScript > java && javaScript > cSharp) {
        document.getElementById('p-js').removeAttribute("class");
    }
    else if (python > javaScript && python > java && python > cSharp) {
        document.getElementById('p-py').removeAttribute("class");
    }
    else if (java > javaScript && java > python && java > cSharp) {
        document.getElementById('p-jv').removeAttribute("class");
    }
    else if (cSharp > javaScript && cSharp > python && cSharp > java) {
        document.getElementById('p-cS').removeAttribute("class");
    }
    else {
        document.getElementById('p-try').removeAttribute("class");
    }

}



function formHandler(event) {
    event.preventDefault();

    programCalculator();

}







window.addEventListener("load", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", formHandler);
});