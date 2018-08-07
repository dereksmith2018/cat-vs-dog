$(document).ready(function() {
  $("input").first().click(function() {
    alert("Meeeeeeeeoooooooow!");
    var num = Math.random()%1000;
    $("input").first().before('<img src="https://loremflickr.com/350/250/cat?random=' + num + '"><br><br>');
  });
  $("input").eq(1).click(function() {
    alert("Bark!");
    var num = Math.random()%1000;
    $("input").eq(1).before('<img src="https://loremflickr.com/350/250/dog?random=' + num + '"><br><br>');
  });

});
