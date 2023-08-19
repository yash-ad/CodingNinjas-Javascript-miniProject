//This JavaScript code is designed to create a counter that starts from 0 and increases up to a user-defined
//number between 1 and 9.
//The counter is displayed with a smooth animation.

//Code below:-
let countInterval;
//countInterval: This is a variable that will store the interval for the counter.

//<button onclick="startCounter()">Start Counter</button>
function startCounter()
//This function is triggered when the "Start Counter" button is clicked.
//It manages the counter animation.
 {
//The value entered by the user in the input field.
let number = parseInt(document.getElementById("number").value);

//The HTML element that displays the current number. 
let currentNum = document.querySelector(".counter .current");

//The HTML element that displays the next number.
  let nextNum = document.querySelector(".counter .next");

//count: Keeps track of the current count value.
  let count = 0;


//This function resets the counter numbers.
//It sets the current number to 0 and the next number to 1.
  resetNumbers(currentNum, nextNum);
  if (number < 1 || number > 9) {
    clearInterval(countInterval);
    return;
  }

//Clears the previous interval that was running
  clearInterval(countInterval);
  countInterval = setInterval(function () {
    if (count === number) {
      clearInterval(countInterval);
      if(count === 9)
      {

alert("Times up and Refresh the page!")
      }
      return;
    }
//This function increases the counter by 1 and updates the displayed numbers with a smooth animation.    
    increaseCount(currentNum, nextNum);
    count++;
  }, 1000);
}

function resetNumbers(currentNo, nextNo, end) {
  currentNo.innerHTML = 0;
  nextNo.innerHTML = 1;
}
function increaseCount(currentNo, nextNo) {
  nextNo.classList.add("animate");
  currentNo.innerHTML = nextNo.innerHTML;
  nextNo.classList.remove("animate");
  nextNo.innerHTML = parseInt(nextNo.innerHTML) + 1;
}

//<button onclick="resetCounter()">Reset Counter</button>
//Reset button function
function resetCounter()
{
let currentNum = document.querySelector(".counter .current");
let nextNum = document.querySelector(".counter .next");
clearInterval(countInterval);
resetNumbers(currentNum,nextNum);
resetInput();
}

//<input type="number" id="number" placeholder="Enter Number"/>
//Input reset as well.
function resetInput()
{
let inputReset = document.getElementById("number");
inputReset.value = ""; //Reset the input field.
}