const questions = document.querySelectorAll(".faq__question");

questions.forEach(question => {
    question.addEventListener("click", function () {
        let answer = question.nextElementSibling;
        if (answer.style.display === "block") {
            hideAnswer(question);
        } else {
            questions.forEach(question => {
                hideAnswer(question);
            });
            displayAnswer(question);
        }
    });
});

function displayAnswer(target) {
    let answer = target.nextElementSibling;
    let arrowIcon = target.firstElementChild;
    answer.style.display = "block";
    arrowIcon.style.transform = "rotate(180deg)";
    target.style.fontWeight = "700";
}

function hideAnswer(target) {
    let answer = target.nextElementSibling;
    let arrowIcon = target.firstElementChild;
    answer.style.display = "none";
    arrowIcon.style.transform = "rotate(0deg)";
    target.style.fontWeight = "400";
}