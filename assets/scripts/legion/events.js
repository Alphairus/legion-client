const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onCreateLegion = function (event) {
  event.preventDefault()

  $('.top_bar h2').html("Pre API Blammed")

  const form = event.target
  const formData = getFormFields(form)

  api.createlegion(formData)
  .then(ui_app.onCreateLegion)
  .catch(ui_app.onFailure)
}

const onCreateLegionClick = function (event) {
  $('#createLegionModalLabel').html("Create A Legion")
}

const onUpdateLegion = function (event) {
  event.preventDefault()

  $('.top_bar h2').html("Pre API M.I.L.F")

  const form = event.target
  const formData = getFormFields(form)

  api.updateLegion(formData)
  .then(ui_app.onUpdateLegion)
  .catch(ui_app.onFailure)
}

const onUpdateLegionClick = function (event) {
  $('#updateLegionModalLabel').html("Update A Legion")
}

const onDestroyLegion = function (event) {
  event.preventDefault()

  $('.top_bar h2').html("Pre API South")

  const form = event.target
  const formData = getFormFields(form)

  api.destroyLegion(formData)
  .then(ui_app.onDestroyLegion)
  .catch(ui_app.onFailure)
}

const onDestroyLegionClick = function (event) {
  $('#deleteLegionModalLabel').html("Destroy A Legion")
}

const onIndexLegion = function (event) {
  event.preventDefault()

  $('.top_bar h2').html("Here are some Legion packs!")
  $('.indexBody').html("")

  api.viewLegion()
  .then(ui_app.onIndexLegion)
  .catch(ui_app.onFailure)
}

const onSearchLegion = function (event) {
  event.preventDefault()

  $('.search-output p').html("")
  $('.top_bar h2').html("Is this the Legion you were looking for?")

  const form = event.target
  const formData = getFormFields(form)

  api.searchLegion(formData)
  .then(ui_app.onSearchLegion)
  .catch(ui_app.onFailure)
}

const onSearchLegionClick = function (event) {
  $('#searchLegionModalLabel').html("Search For A Lesson")
  $('.search-output p').html("")
}

module.exports = {
  onCreateLegion,
  onUpdateLegion,
  onDeleteLegion,
  onIndexLegion,
  onSearchLegion,
  onCreateLegionClick,
  onUpdateLegionClick,
  onDeleteLegionClick,
  onSearchLegionClick
};
