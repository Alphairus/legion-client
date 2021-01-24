const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onCreateLegion = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.createlegion(formData)
    .then(ui.onCreateLegion)
    .catch(ui.onFailure)
}

// const onCreateLegionClick = function (event) {
//   $('#createLegionModalLabel').html("Create A Legion")
// }

const onUpdateLegion = function (event) {
  event.preventDefault()
  const legionData = getFormFields(event.target)

  api.updateLegion(legionData)
    .then(ui.onUpdateLegion)
    .catch(ui.onFailure)
}

// const onUpdateLegionClick = function (event) {
//   $('#updateLegionModalLabel').html("Update A Legion")
// }

const onDestroyLegion = function (event) {
  event.preventDefault()

  const legionData = getFormFields(event.target)

  api.destroyLegion(legionData)
    .then(ui.onDestroyLegion)
    .catch(ui.onFailure)
}

// const onDestroyLegionClick = function (event) {
//   $('#deleteLegionModalLabel').html("Destroy A Legion")
// }

const onIndexLegion = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.index()
    .then(ui.onIndexLegion)
    .catch(ui.onFailure)
}

const onSearchLegion = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.searchLegion(legionData)
    .then(ui.onSearchLegion)
    .catch(ui.onFailure)
}

module.exports = {
  onCreateLegion,
  onUpdateLegion,
  onDestroyLegion,
  onIndexLegion,
  onSearchLegion
};
