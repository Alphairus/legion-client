'use strict'

const store = require('./../store.js')

const onCreateLegion = function () {
  $('#message').html("You made a Legion!")

  const legionHtml = `
  <h3>${response.legion.title}</h3>
  <p>Loyalty: ${response.legion.loyalty}</p>
  <p>Homeworld: ${response.legion.homeworld}</p>
  <p>Primarch: ${response.legion.primarch}</p>
  <p>ID: ${response.legion._id}</p>
  `
  $('#legion-display').html(legionHtml)
  $('form').trigger('reset')
}

const onUpdateLegion = function () {
  $('#message').html("Legion Updated!")
  $('#legion-display').text('')
  $('form').trigger('reset')
}

const onIndexLegion = function (response) {
  $('#message').text('')
  // gives object of legions
  // make constant for this array
  const legions = response.legions
  // new empty array
  let legionHtml = ''
  // for each legion array, generate HTML and put that HTML in the DOM
  legions.forEach(function (currentLegion) {
    const currentLegionHtml = `
    <h4>${currentLegion.title}</h4>
    <p>Loyalty: ${currentLegion.loyalty}</p>
    <p>Homeworld: ${currentLegion.homeworld}</p>
    <p>Primarch: ${currentLegion.primarch}</p>
    <p>ID: ${currentLegion._id}</p>
    `
    legionHTML += currentLegionHTML
  })
  $('#legion-display').html(legionHTML)
}
  // const legionListing = res.legions
  //
  // legionListing.forEach(legion => {
  //   $('.indexBody').append("Search ID: " + legion._id + "<br>")
  //   $('.indexBody').append("Name: " + legion.name + "<br>")
  //   $('.indexBody').append("Type: " + legion.type + "<br>")
  //   $('.indexBody').append("Difficulty: " + legion.difficulty + "<br>")
  //   $('.indexBody').append("Code: " + legion.code + "<br>")
  //   $('.indexBody').append("-------------------------------------" + "<br>")
  // })
}

const onDeleteLegion = function (res) {
  $('#message').text("That Legion has been excommunicated, good riddance.");
  $('#legion-display').text('')
  $('form').trigger('reset')
}

const onSearchLegion = function (legionData) {
  $('#message').text('')
  const legionHtml = `
    <h4>${currentLegion.title}</h4>
    <p>Loyalty: ${currentLegion.loyalty}</p>
    <p>Homeworld: ${currentLegion.homeworld}</p>
    <p>Primarch: ${currentLegion.primarch}</p>
    <p>ID: ${currentLegion._id}</p>
  `
  $('#legion-display').html(legionHTML)
  $('form').trigger('reset')
}
  // const legionListing = res.legion
  //
  // legionListing.forEach(legion => {
  //   $('.search-output p').append("Name: " + legion.name + "<br>")
  //   $('.search-output p').append("Type: " + legion.type + "<br>")
  //   $('.search-output p').append("Difficulty: " + legion.difficulty + "<br>")
  //   $('.search-output p').append("Code: " + legion.code + "<br>")
  // })

const onFailure = function () {
  $('.top_bar h2').html("Critical Error<br>If you see this, something odd happened!<br>The API may be unavailable!");
}

module.exports = {
  onCreateLegion,
  onUpdateLegion,
  onIndexLegion,
  onDeleteLegion,
  onSearchLegion,
  onFailure
};
