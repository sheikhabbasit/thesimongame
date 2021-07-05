var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
//
//
$("body").on("keypress", function(){
  nextSequence();
});
//
function checkAnswer(currentLevel){
  if (gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("success");
    if (userClickedPattern.length === gamePattern.length){

      setTimeout(function () {
        nextSequence();
      }, 1000);}

  } else {
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
    }
  }

//
//
function nextSequence(){

  var randomNumber = Math.floor((Math.random()*4));
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  // console.log("played");
  $("h1").text("Level " + level);
  level++;
  userClickedPattern = [];
}
//
function playSound(name){
  var colour = new Audio("sounds/"+name+".mp3");
  colour.play();
}
//
function startOver(){
    level=0;
    gamePattern=[];
}
$(".btn").on("click", function animatePress(currentColour){
  var clicked = this.id;
  $("#"+clicked).addClass("pressed");
  setTimeout(function(){
      $("#"+clicked).removeClass("pressed");
  }, 100);
});

//
//
//
//
$(".btn").on("click", function(){
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});





//
