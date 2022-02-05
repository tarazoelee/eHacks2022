let addReviewBtn = document.getElementById('addReview');
let counter = 1;

addEventListener(onclick, event => addReviewBtn(event));


function addReviewBtn(event){
    counter++;
    let target = event.target;
    let reviews = document.getElementById('reviews');
    let div = document.createElement('div');
    div.innerHTML =    
    `<input type="text" id="name" placeHolder="Non-Profit Name"></input>
    <input type="text" id="rating" placeHolder="Rating out of 5"></input>
    <input type="text" id="about" placeHolder="About your experience"></input>`




    reviews.append(div);
} 