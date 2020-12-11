/*
* The Main program implements an application that
* allows you to edit a stack.
*
* @author  Ben Whitten
* @version 1.1
* @since   2020-12-10
*/

// Defining require and process
/*eslint no-undef: "error"*/
/*global require*/
// Defining prompt for getting user input.

const prompt = require('prompt-sync')({sigint: true});

///////////////////////////////////////////////////////////////////////////////

// This is the object MrCoxallStack
class MrCoxallStack {
  constructor() {
      this.stack = [];
  }

  push(pushedNumber) {
    if (isNaN(pushedNumber) == true) {
      pushedNumber = "-1";
    } else {
      this.stack.push(pushedNumber);
      pushedNumber = "Pushed: " + pushedNumber;
    }

    return pushedNumber;
  }

  pop() {
    var poppedNumber = "Popped: " + this.stack[this.stack.length - 1];
    this.stack.pop();
    if (poppedNumber == "Popped: undefined") {
      poppedNumber = -1;
    }
    return poppedNumber;
  }

  show() {
    var stackValues = "Current Stack Values: ";

    stackValues += this.stack[0];
    for (var position = 1; position < this.stack.length; position++) {
      stackValues = stackValues + ", " + this.stack[position];
    }
    if (stackValues == "Current Stack Values: undefined") {
    stackValues = "-1";
    }
    return stackValues;
  }
}

///////////////////////////////////////////////////////////////////////////////

let stack = new MrCoxallStack();
var pushedNumber;
var poppedNumber;
var temp = 1;
var option;
var stackValues;

// This handles the input and output.
  
while (temp == 1) {
  try {
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"
                + "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    console.log("What do you want to do? [push] [pop] [show]");
    option = prompt("");

    if (option == "push") {
      console.log("")
      console.log("Input a number to push to the stack: ")
      pushedNumber = prompt("");
      pushedNumber = stack.push(pushedNumber);
      if (pushedNumber == "-1") {
        console.log();
        console.log("ERROR: Invalid Input");
      } else {
        console.log("")
        console.log(pushedNumber);
      }

    } else if (option == "pop") {
      poppedNumber = stack.pop();
      if (poppedNumber == "-1") {
        console.log();
        console.log("ERROR: No Values In Stack");
      } else {
        console.log("")
        console.log(poppedNumber);
      }
    } else if (option == "show") {
      stackValues = stack.show();
      if (stackValues == "-1") {
        console.log();
        console.log("ERROR: No Values In Stack");
      } else {
        console.log("")
        console.log(stackValues);
      }
    } else {
      console.log("");
      console.log("ERROR: Invalid Input");
    }

  } catch (err) {
    console.log("");
    console.log("ERROR: Invalid Input");
  }
}
