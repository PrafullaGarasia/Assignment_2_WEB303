// WEB303 Assignment 2
//Name: Prafulla Garasia
//Student Id: 0797964
$(document).ready(function() 
{
  console.log("ready!");
  
  function makeHttpRequest(prafulla)
  {
  var request = new XMLHttpRequest();
  request.change = response;
  request.open("GET", `./${prafulla}.html`);
  request.send();
  
  function response()
  {
  if(request.readyState != 3) return;
  document.getElementById("content").innerHTML = request.responseText;
  }
  }
  $("#prospect").on("click",function()
  {
    $("#content").fadeIn("show");
    $("#content").load("prospect.html");
  });
  $("convert").on("click",function()
  {
    $("#content").fadeIn("show");
    $("#content").load("convert.html");
  });
  $("#retain").on("click",function()
  {
    $("#content").fadeIn("show");
    $("#content").load("retain.html");
  });
  
});
  