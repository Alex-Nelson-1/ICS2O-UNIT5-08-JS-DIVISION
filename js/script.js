// Created by: Alex Nelson
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT5-08-JS-WHILE-LOOPS-DIVISION/sw.js", {
    scope: "/ICS2O-UNIT5-08-JS-WHILE-LOOPS-DIVISION/",
  })
}

/**
 * This function does basic division using loops.
 */
function multiply() { 
  //Variable that gets divided
  let numberOne = parseFloat(document.getElementById("numberOne").value)
  //Variable that is dividing
  let numberTwo = parseFloat(document.getElementById("numberTwo").value)
  //Output variable
  let quotient = null
  //redo statement
  if (numberTwo > numberOne || numberOne < 0 || numberTwo < 0) {
  document.getElementById("redo").innerHTML = "Please reload the page. A number is negative or number 2 is larger than number 1."
  }
  else {
    //division feature
  while (numberTwo <= numberOne) {
    numberOne = numberOne - numberTwo
    quotient = quotient + 1
    }
  }
  //Output
document.getElementById("product").innerHTML = quotient + " R " + numberOne
}