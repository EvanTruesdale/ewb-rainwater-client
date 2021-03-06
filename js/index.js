
"use strict";
(function() {

  window.addEventListener("load", init);

  /** This creates the functionality of all of the buttons on the page */
  function init() {
    let buttons = document.querySelectorAll(".button");
    for (let i = 0; i < 4; i++) {
      buttons[i].onclick = click;
    }
  }

  /** Click function */
  function click() {
    alert(this.textContent + " was clicked!");
    this.disabled = true;
  }


})();
