const questions = document.querySelectorAll(".faq__question");
const box = document.querySelector(".img-box");
let boxPosition = 190

questions.forEach(question => {
    let answer = question.nextElementSibling;
    let arrowIcon = question.firstElementChild;
    question.addEventListener('click', e => {
        console.log(answer)
        if (!answer.style.display || answer.style.display === "none") {
            answer.style.display = "block";
            arrowIcon.style.transform = "rotate(180deg)";
            question.style.fontWeight = "700";
            boxPosition -= 5
            box.style.top = `${boxPosition}px`
        } else {
            answer.style.display = "none";
            arrowIcon.style.transform = "rotate(0deg)";
            question.style.fontWeight = "400";
            boxPosition += 5
            box.style.top = `${boxPosition}px`
        }
    })
})