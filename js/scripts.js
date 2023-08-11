function calculator(event) {
    event.preventDefault();

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
    else {
        cSharp += 1;
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
    else {
        cSharp += 1;
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
    else {
        cSharp += 1;
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
    else {
        cSharp += 1;
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
    else {
        cSharp += 1;
    }


    console.log(javaScript)
    console.log(python)
    console.log(java)
    console.log(cSharp)


    if (javaScript > python && javaScript > java && javaScript > cSharp) {
        document.getElementById('p-js').removeAttribute("class");
    }





}







window.addEventListener("load", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", calculator);
});