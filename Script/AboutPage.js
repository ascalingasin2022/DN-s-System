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