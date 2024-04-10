/*Wedding Carousel*/
const list = document.querySelector(".list");
const item = document.querySelector(".item"); 

function handleClick(direction) {
    if(direction === "previous") {
        list.scrollBy({ left: -536, behavior: "smooth" });
    } else {
        list.scrollBy({ left: 536, behavior: "smooth" });
    }
}

/*Adult Party Carousel*/
const list1 = document.querySelector(".list1");
const item1 = document.querySelector(".item1"); 

function handleClick1(direction) {
    if(direction === "previous") {
        list1.scrollBy({ left: -536, behavior: "smooth" });
    } else {
        list1.scrollBy({ left: 536, behavior: "smooth" });
    }
}

/*Birthday Party Carousel*/
const list2 = document.querySelector(".list2");
const item2 = document.querySelector(".item2"); 

function handleClick2(direction) {
    if(direction === "previous") {
        list2.scrollBy({ left: -536, behavior: "smooth" });
    } else {
        list2.scrollBy({ left: 536, behavior: "smooth" });
    }
}

/*Debut Carousel*/
const list3 = document.querySelector(".list3");
const item3 = document.querySelector(".item3"); 
 
function handleClick3(direction) {
    if(direction === "previous") {
        list3.scrollBy({ left: -536, behavior: "smooth" });
    } else {
        list3.scrollBy({ left: 536, behavior: "smooth" });
    }
}

/*Baptism Carousel*/
const list4 = document.querySelector(".list4");
const item4 = document.querySelector(".item4"); 

function handleClick4(direction) {
    if(direction === "previous") {
        list4.scrollBy({ left: -536, behavior: "smooth" });
    } else {
        list4.scrollBy({ left: 536, behavior: "smooth" });
    }
}

//dialog box
function openDialog(dialogId) {
    var dialog = document.getElementById(dialogId);
    dialog.showModal();
}
function closeDialog(dialogId) {
    var dialog = document.getElementById(dialogId);
    dialog.close();
}