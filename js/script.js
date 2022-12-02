// Copyright (c) 2022 Timothy Manwell All rights reserved
//
// Created by: Timothy Manwell
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/**
 * This function displays an alert.
 */
 function myButtonClicked() {
  const TAX = 1.13
  const message = 3.99
  const delivery = 15
  const size = document.getElementById("size").value
  const flavour = document.getElementById("flavour").value
  const message = document.getElementById("message").value
  const pickUpOrDelivery = document.getElementById("pick-up-or-delivery").value

  const basePrice = (size + falvour) * TAX
  const messageOnly = (size + flavour + message) * TAX
  const deliveryOnly = (size + flavour + delivery) * TAX
  const messageAndDelivery = (size + flavour + message + delivery) * TAX

  if (message == "yes" && pickUpOrDelivery == "delivery"){
    document.getElementById("total").innerHTML = "Your total is: $" + messageAndDelivery + "." 
  } else if (message == "no" && pickUpOrDelivery == "delivery"){
    document.getElementById("total").innerHTML = "Your total is: $" + deliveryOnly + "."
  } else if (message == "yes" && pickUpOrDelivery == "pick"){
    document.getElementById("total").innerHTML = "Your total is: $" + messageOnly + "."
  } else{
    document.getElementById("total").innerHTML = "Your total is: $" + basePrice + "."
  }
}
