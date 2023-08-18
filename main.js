let numberContainer = document.querySelector('.card__support-request__numbers');
let rateNumber = document.querySelector('.card__state-start__result-number');
let submitBtn = document.querySelector('.card__support-request__button');
let cardRatingState = document.querySelector('.card__support-request');
let cardStateStars = document.querySelector('.card__state-start');

numberContainer.addEventListener('click', event=>{
    let numberSelected = event.target.innerText;
    rateNumber.innerHTML = numberSelected;
    if(numberSelected > 0 || numberSelected <= 5){
        submitBtn.addEventListener('click', ()=>{
            cardRatingState.style.display = 'none';
            cardStateStars.style.display = 'flex'
        });
    }
});