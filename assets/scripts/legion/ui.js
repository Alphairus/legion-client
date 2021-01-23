const store = require('./../store.js')

const onCreateLegion = function () {
  $('.top_bar h2').html("You made a Legion!")
  $('#createLegionModalLabel').text("A Legion has been added to the database!")
  $('form').trigger('reset')
}

const onUpdateLegion = function () {
  $('.top_bar h2').html("Thanks for updating a Legion.")
  $('#updateLegionModalLabel').text("The Legion has been updated!")
  $('form').trigger('reset')
}

const onIndexLegion = function (res) {
  const legionListing = res.legions

  //const trainingTXT = JSON.stringify(res.trainings[0].name)
  legionListing.forEach(legion => {
    $('.indexBody').append("Search ID: " + legion._id + "<br>")
    $('.indexBody').append("Name: " + legion.name + "<br>")
    $('.indexBody').append("Type: " + legion.type + "<br>")
    $('.indexBody').append("Difficulty: " + legion.difficulty + "<br>")
    $('.indexBody').append("Code: " + legion.code + "<br>")
    $('.indexBody').append("-------------------------------------" + "<br>")
  })

  $('form').trigger('reset')
  //$('.indexBody p').html(trainingTXT)
}

const onDeleteLegion = function (res) {
  $('.top_bar h2').text("That Legion has been excommunicated, good riddance.");
  $('#deleteLegionModalLabel').html("Legion Destroyed!")
  $('form').trigger('reset')
}

const onSearchLegion = function (res) {
  const legionListing = res.legion

  legionListing.forEach(legion => {
    $('.search-output p').append("Name: " + legion.name + "<br>")
    $('.search-output p').append("Type: " + legion.type + "<br>")
    $('.search-output p').append("Difficulty: " + legion.difficulty + "<br>")
    $('.search-output p').append("Code: " + legion.code + "<br>")
  })

  $('form').trigger('reset')
  //$('.search-output').append(res)
}

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
