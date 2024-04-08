/*Type of Event and Package dropdown*/
/*https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_cascading_dropdown*/
var selectedObject = {
    "Wedding": ["Majesty Wedding Package", "Emerald Wedding Package", "Coral Wedding Package", "Affordable Wedding Package"],
    "Adult Party": ["Adult Party Package 1", "Adult Party Package 2", "Adult Party Package 3"],
    "Birthday Party": ["Birthday Party Package 1", "Birthday Party Package 2", "Birthday Party Package 3", "Birthday Party Package 4"],
    "Debut": ["Ruby Debut Package", "Turquoise Debut Package", "Amethyst Debut Package", "Affordable Debut Package"],
    "Baptism": ["Baptism Package 1", "Baptism Package 2"],
    "Others": ["Customized"]
}

var eventType = document.getElementById("eventType");
var package = document.getElementById("package");
for (var x in selectedObject) {
    eventType.options[eventType.options.length] = new Option(x, x);
}
eventType.onchange = function() {
    package.length = 1;
    var Z = selectedObject[eventType.value];
    for (var i = 0; i < Z.length; i++) {
        package.options[package.options.length] = new Option(Z[i], Z[i]);
    }
}
