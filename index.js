/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */


function greet(timeString){
  let hourString = timeString.split(':')[0]
  let hourInt = parseInt(hourString)

  if (hourInt >= 0 && hourInt <= 11){
        return "Good Morning"
  } else if (hourInt >= 12 && hourInt < 17){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }

}
/* Write your implementation of displayMessage() */
let greeting = document.getElementById('greeting')
function displayMessage(messageString){
  greeting.innerText = messageString
}