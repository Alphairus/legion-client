'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const legionEvents = require('./legion/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.after-login').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#log-out').on('submit', authEvents.onLogOut)
  // App
  $('#createLegion').on('submit', legionEvents.onCreateLegion)
  $('#updateLegion').on('submit', legionEvents.onUpdateLegion)
  $('#destroyLegion').on('submit', legionEvents.onDestroyLegion)
  $('#searchLegion').on('submit', legionEvents.onSearchLegion)

  $('#createLegionButton').on('click', legionEvents.onCreateLegionClick)
  $('#updateLegionButton').on('click', legionEvents.onUpdateLegionClick)
  $('#destroyLegionButton').on('click', legionEvents.onDeleteLegionClick)
  $('#indexLegionButton').on('click', legionEvents.onIndexLegionClick)
  $('#searchLegionButton').on('click', legionEvents.onSearchLegionClick)

})
