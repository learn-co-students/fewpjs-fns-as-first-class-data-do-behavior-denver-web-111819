/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
  function greet(someString){
    const stringHour = someString.substring(0,2)
    const intHour = parseInt(stringHour)
    if (intHour < 12){
      return "Good Morning"
    } else if (intHour >= 12 && intHour < 17) {
      return "Good Afternoon"
    } else {
      return "Good Evening"
    }
  }
/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  const greetingH1 = document.getElementById("greeting")
  greetingH1.innerText = greeting
}