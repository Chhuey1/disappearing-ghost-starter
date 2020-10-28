$(".hide-button").click(function() {
  $(".ghost-image").hide();
});
$(".show-button").click(function() {
  $(".ghost-image").show();
});
$(".update-img-button").click(function() {
  $("img").attr(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTXryNoXYYah4QbBSY9CLv-YLkrJzWOGe7DQ&usqp=CAU"
  );
});
$(".message-button").click(function(){
  let message = $("input").val();  
    $(".message").append(message);
});
$(".name-button").click(function(){
  let name = $("input").val();
  $("h1").text("My name is "+name);
});