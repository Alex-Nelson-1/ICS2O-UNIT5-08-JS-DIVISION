// Created by: Alex Nelson
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "/ICS2O-UNIT5-08-JS-WHILE-LOOPS-DIVISION/sw.js",
    {
      scope: "/ICS2O-UNIT5-08-JS-WHILE-LOOPS-DIVISION/",
    }
  )
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}
