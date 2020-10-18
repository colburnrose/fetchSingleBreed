"use strict";

function getDogImage(breed) {
  let URL = `https://dog.ceo/api/breed/${breed}/images/random`;
  if (URL) {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then((responseJson) => displayResults(responseJson))
      .catch((error) => alert("Something went wrong. Try again later."));
  }
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  if (responseJson.status === "error") {
    $(".results-img").html(
      `<p>status: '404', message: 'A bad breed you have requested!' </p>`
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
