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

/* Send feedback dialog box*/
const openButton = document.querySelector('[data-open-modal]');
const closeButton = document.querySelector('[data-close-modal]');
const modal = document.querySelector('[data-modal]');

openButton.addEventListener('click', () => {
    modal.showModal();
});
closeButton.addEventListener('click', () => {
    modal.close();
});
