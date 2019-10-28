$(document).ready(function() {
$("form#faves").submit(function(event) {
  event.preventDefault();

// $("#color").text ();
// $("#food").text ();
// $("#animal").text ();


var favColor = $("input#color").val();
var favFood = $("input#food").val();
var favAnimal = $("input#animal").val();
var favMovie = $("input#movie").val();
console.log(favColor)

// $("#ansColor").text (favColor);
// $("#ansFood").text (favFood);
// $("#ansAnimal").text (favAnimal);


// $("#ansFavs").text ([favColor, favFood, favAnimal, favMovie]);

var favAns = [favColor, favFood, favAnimal, favMovie]
favAns.pop()
var favAns2 = [favMovie]
favAns2.concat([favAns])
$("#ansFavs").text (favAns);
$("#ansMovie").text (favAns2);


    });
  });
