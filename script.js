$(".route1").hide();
$(".route2").hide();
$(".route1a").hide();
$(".route2a").hide();
$(".route1b").hide();
$(".route1c").hide();
$(".win").hide();

$(".start").css("border", "dashed", "#534F87", "3px");


$(".yes-button").click(function() {
  $(".route1").show();
  $(".pathone").css("border","dashed #534F87 5px");
  $(".start").fadeOut();
  $(".routeonetext").css("color","#1A5276");
  $(".textone").fadeOut();
  $(".textone").css("color","white");
  $(".yes-button").fadeOut();
  $(".no-button").fadeOut();
  $(".left-button").fadeIn();
  $("right-button").fadeIn();
});

$(".no-button").click(function() {
  $(".route2").fadeIn();
  $("routetwotext").fadeIn();
  $(".routetwotext").css("color","#1A5276");
  $(".textone").fadeOut();
  $(".start").fadeOut();
  $(".yes-button").fadeOut();
  $(".no-button").fadeOut();
});

$(".return").click(function() {
  $(".start").fadeIn();
  $(".textone").fadeIn();
  $(".route2").hide();
  $(".yes-button").fadeIn();
  $(".no-button").fadeIn();
});

$(".left-button").click(function() {
  $(".route1a").fadeIn();
  $(".route1").fadeOut();
  $(".left-button").hide();
  $(".right-button").hide();
  $(".texttwo").css("color","#1A5276");
});

$(".walk").dblclick(function() {
  $(".route1b").fadeIn();
  $(".route1a").fadeOut();
  $("left-button").hide();
  $("right-button").hide();
  $("h2").css("font-family","Itim","cursive");
  $("h2").css("color","#1A5276");
});

$(".running").hover(function() {
  $(".route1c").fadeIn(); 
  $(".route1b").fadeOut();
});

$(".choiceone").click(function() {
  $(".win").fadeIn(); 
  $(".route1c").fadeOut();
  $(".yay").css("border","dashed #534F87 4px");
});

$(".choicetwo").click(function() {
  $(".route2a").fadeIn();
  $(".route1c").fadeOut();
});

$(".right-button").click(function() {
  $(".route2a").fadeIn(); 
  $(".route1").fadeOut();
  $("h2").css("font-family","Itim","cursive");
  $("h2").css("color","#1A5276");
});

$(".deadend").hover(function() {
  $(".start").fadeIn();
  $(".textone").fadeIn();
  $(".route2a").hide();
  $(".yes-button").fadeIn();
  $(".no-button").fadeIn();
  $(".routeonetext").css("color","#1A5276");
});



