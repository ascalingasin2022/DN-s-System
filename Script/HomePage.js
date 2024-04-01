/*Categories Carousel*/
const list = document.querySelector(".list");
                  
const item = document.querySelector(".item"); // We want to know the width of one of the items. We'll use this to decide how many pixels we want our carousel to scroll.
const itemWidth = item.offsetWidth;
          
function handleClick(direction) {
    if(direction === "previous") {// Based on the direction we call `scrollBy` with the item width we got earlier
        list.scrollBy({ left: -itemWidth, behavior: "smooth" });
    } else {
        list.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
}

/*Feedback Carousel*/
const list2 = document.querySelector(".list2");
const item2 = document.querySelector(".item2"); // We want to know the width of one of the items. We'll use this to decide how many pixels we want our carousel to scroll.

function handleClick1(direction) {
    if(direction === "previous") {// Based on the direction we call `scrollBy` with the item width we got earlier
        list2.scrollBy({ left: -460, behavior: "smooth" });
    } else {
        list2.scrollBy({ left: 460, behavior: "smooth" });
    }
}

/* Feedback Form number of characters counter*/
function countCharacters(textarea) {
    const maxLength = parseInt(textarea.getAttribute('maxlength'));
    const currentLength = textarea.value.length;
    const remainingLength = maxLength - currentLength;
    const counterElement = document.getElementById('characterCount');
    counterElement.textContent = currentLength;
}

/* Form Validation */
const submitButton = document.querySelector(".SubmitButton");
const SendFeedback_Content = document.querySelector(".SendFeedback_Content");
const SendFeedback_header = document.querySelector(".SendFeedback_header");
const SubmitConfirmation = document.querySelector(".SubmitConfirmation");

submitButton.onclick = () =>{

    const inputComment = document.querySelector('.inputComment').value;
    const starsSelected = document.querySelector('input[name="rate"]:checked');

    if (!inputComment.trim() && !starsSelected) {
        alert("Please rate us and provide your comments.");
        return false;
    }

    if (!starsSelected) {
        alert("Please rate us.");
        return false;
    }

    if (!inputComment.trim()) {
        alert("Please provide your comments.");
        return false;
    }

    else{
        SendFeedback_Content.style.display = "none";
        SendFeedback_header.style.display = "none";
        SubmitConfirmation.style.display = "block";
        return true;
    }

}