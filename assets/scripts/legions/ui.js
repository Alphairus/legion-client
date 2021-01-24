'use strict'

const store = require('./../store.js')

const createLegionSuccess = function (response) {

  $('#message').text("You made a Legion!")

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

const createLegionFailure = function (error) {
  $('#message').text('Legion creation failed ' + error.responseJSON.message)
}

const onIndexSuccess = function (response) {
  $('#message').text('')
  // gives object of all legions
  // make constant for this array
  const legions = response.legions
  console.log(legions);
  // new empty array
  let legionsHTML = ''
 // generate HTML and put that HTML in the DOM
  legions.forEach(function (currentLegion) {
    const currentLegionHTML = `
    <h4>${currentLegion.title}</h4>
    <p>Loyalty: ${currentLegion.loyalty}</p>
    <p>Homeworld: ${currentLegion.homeworld}</p>
    <p>Primarch: ${currentLegion.primarch}</p>
    <p>ID: ${currentLegion._id}</p>
    `
  })
  if (!legionsHTML) {
    $('#legion-display').text('There are no legions.')
  } else {
    $('#legion-display').html(legionHTML)
  }
}

const onShowSuccess = function (legionData) {
  $('#message').text('')

    const gameHTML = `
    <h4>${legionData.legion.title}</h4>
    <p>Loyalty: ${legionData.legion.loyalty}</p>
    <p>Homeworld: ${legionData.legion.homeworld}</p>
    <p>Primarch: ${legionData.legion.primarch}</p>
    `
  $('#legion-display').html(legionHTML)
  $('form').trigger('reset')
}

const onUpdateSuccess = function () {
  $('#message').html("Legion Updated!")
  $('#legion-display').text('')
  $('form').trigger('reset')
}

const onDeleteSuccess = function () {
  $('#message').text("That Legion has been excommunicated, good riddance.");
  $('#legion-display').text('')
  $('form').trigger('reset')
}

const onFailure = function () {
  $('#message').text('Critical Error ' + error.responseJSON.message)
}

module.exports = {
  createLegionSuccess,
  createLegionFailure,
  onIndexSuccess,
  onShowSuccess,
  onDeleteSuccess,
  onUpdateSuccess,
  onFailure
}
