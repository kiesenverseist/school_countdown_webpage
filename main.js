// Set the date we're counting down to
var countDownDate = new Date("Jan 29, 2018 08:30:00").getTime();

// List of all events
var events = [
/*["EVENT NAME   ", EVENT DATE                                 ],*/
  ["School Starts", new Date("Jan 29, 2018 08:30:00").getTime()],
  ["Event Two"    , new Date("Feb 10, 2018 08:30:00").getTime()]
];

// The Time in the main display
var mainTime = ""

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Format Time into readable format
  mainTime = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // Display the result in the element with id="demo"
  document.getElementById("main_time").innerHTML = mainTime;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("main_time").innerHTML = "EXPIRED";
  }

}, 997); // not 1000 for fun >:)

function showInTitle() {
  var show = document.getElementById("myCheck").checked;

  if (show) {
    document.title= mainTime;
  } else {
    document.title = "School Countdowns"
  }
}
