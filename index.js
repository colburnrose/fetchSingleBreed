"use strict";

function getDogImage(breed) {
  let URL = `https://dog.ceo/api/breed/${breed}/images/random`;
  fetch(URL)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    .catch((error) => alert("Something went wrong. Try again later."));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  if (responseJson.code === "404") {
    $(".results-img").html(
      `<p>statusCode: '404', message: 'Breed not found!' </p>`
    );
  } else {
    $(".results-img").html(
      `<img src="${responseJson.message}" class="results-img">`
    );
  }

  $(".results").removeClass("hidden");
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    let input = $("#breed").val();
    getDogImage(input);
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
