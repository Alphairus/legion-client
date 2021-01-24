'use strict'

const api = require('./api')
const ui = require('./ui')
// const store = require('./../store')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onLegionCreate = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.create(data)
    .then(ui.createLegionSuccess)
    .catch(ui.createLegionFailure)
}

// const onCreateLegionClick = function (event) {
//   $('#createLegionModalLabel').html("Create A Legion")
// }

const onUpdateLegion = function (event) {
  event.preventDefault()
  const legionData = getFormFields(event.target)

  api.update(legionData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onFailure)
}

// const onUpdateLegionClick = function (event) {
//   $('#updateLegionModalLabel').html("Update A Legion")
// }

const onDestroyLegion = function (event) {
  event.preventDefault()

  const legionData = getFormFields(event.target)

  api.destroy(legionData)
    .then(ui.onDeleteSuccess)
    .catch(ui.onFailure)
}

// const onDestroyLegionClick = function (event) {
//   $('#deleteLegionModalLabel').html("Destroy A Legion")
// }

const onShowLegions = function (event) {
  event.preventDefault()

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onFailure)
}

const onGetLegion = function (event) {
  event.preventDefault()

  const legiondata = getFormFields(event.target)

  api.show(legionData)
    .then(ui.onShowSuccess)
    .catch(ui.onFailure)
}

module.exports = {
  onLegionCreate,
  onShowLegion,
  onGetLegion,
  onDestroyLegion,
  onUpdateLegion
}
