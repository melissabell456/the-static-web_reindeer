var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

// Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. The name of the reindeer should be prepended with the corresponding color from the other array.

// Example output:

// Blue Dasher

// Red Dancer
function santa() {
    var thisColor="";
    var thisReindeer="";
    var hohohoElement = document.getElementById("reindeer");
    if (colors.length < reindeer.length) {
        var iters = colors.length;
    }   
        else {
        iters = reindeer.length;
    }
    for (var i = 0; i < iters; i++) {
       thisColor=colors[i];
       thisReindeer=reindeer[i];
        console.log(reindeer[i]);
        console.log(colors[i]);
        hohohoElement.innerHTML+="<div>" + thisColor + " " + thisReindeer + "</div>";
    }
};
santa();