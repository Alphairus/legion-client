'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('./../../../lib/get-form-fields.js')

const onLegionCreate = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.create(data)
    .then(ui.createLegionSuccess)
    .catch(ui.createLegionFailure)
}

const onShowLegions = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onFailure)
}

const onGetLegion = function (event) {
  event.preventDefault()

  const legionData = getFormFields(event.target)

  api.show(legionData)
    .then(ui.onShowSuccess)
    .catch(ui.onFailure)
}

const onDestroyLegion = function (event) {
  event.preventDefault()

  const legionData = getFormFields(event.target)

  api.destroy(legionData)
    .then(ui.onDeleteSuccess)
    .catch(ui.onFailure)
}

const onUpdateLegion = function (event) {
  event.preventDefault()

  const legionData = getFormFields(event.target)
  api.update(legionData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onFailure)
}

module.exports = {
  onLegionCreate,
  onShowLegions,
  onGetLegion,
  onDestroyLegion,
  onUpdateLegion
}
