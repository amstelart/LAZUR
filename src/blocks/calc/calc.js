"use strict";

ready(function () {
  let totalPrice = document.getElementById("total-price"); // get all element of services

  const navLinks = document.querySelectorAll(".tabs__link"); // get first service when page load

  let service = navLinks[0].dataset.tab; // get layout tab from current service

  let tab = document.getElementById(service); // when page load

  setPrice(); // for picked radio-button on current service

  tab.addEventListener("click", () => setPrice()); // when picked another service

  navLinks.forEach(el => el.addEventListener("click", e => {
    // get picked service
    service = e.target.dataset.tab; // get layot tab from picked service

    tab = document.getElementById(service);
    setPrice(); // for picked radio-button on another service

    tab.addEventListener("click", () => setPrice());
  }));

  function setPrice() {
    // grab all cheked inputs
    const nodeList = tab.querySelectorAll("input:checked");
    let prices = []; // get all input value

    nodeList.forEach(el => prices.push(Number(el.value))); // sum price

    const sumPrice = prices.reduce(function (acc, val) {
      return acc + val;
    }, 0); // format from 1000 to 1 000

    totalPrice.innerHTML = sumPrice.toLocaleString();
  }
});