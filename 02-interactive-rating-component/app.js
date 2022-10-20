const form = document.querySelector("form");
const thankyouCard = document.querySelector(".card-thankyou");
const yourRating = document.querySelector(".card__info__rating");
const ratingLabels = document.querySelectorAll(".rating__label");

// adding eventlisteners to all labels and collect target data
ratingLabels.forEach(function (ratingLabel) {
    ratingLabel.addEventListener('click', function (event) {
        let target = event.target;
        ratingLabels.forEach(function (ratingLabel) {
            ratingLabel.classList.remove("rating__label--selected");
        });
        target.classList.add("rating__label--selected");
        yourRating.innerText = target.innerText;
    });
});

// adding eventlistener to the submit button to display thankyou state
form.addEventListener("submit", function (event) {
    if (yourRating.innerText !== '') {
        form.classList.add("d-none");
        thankyouCard.classList.remove("d-none");
        event.preventDefault();
    }
});
