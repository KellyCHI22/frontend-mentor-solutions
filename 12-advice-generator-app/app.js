const button = document.querySelector(".advice__btn");
const adviceId = document.querySelector(".advice__id");
const advice = document.querySelector(".advice__content");

button.addEventListener("click", callAdvice);
callAdvice();

function callAdvice() {
    let id = Math.floor(Math.random() * 225);
    axios
        .get(`https://api.adviceslip.com/advice/${id}`)
        .then(function (response) {
            const data = response.data.slip.advice;
            adviceId.innerText = id;
            advice.innerText = `"${data}"`;
        })
        .catch(function (error) {
            console.log(error);
        });
}