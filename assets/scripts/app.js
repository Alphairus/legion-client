'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const legionEvents = require('./legions/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#legions').hide()
  $('#auth').hide()
  $('#buttons').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#log-out').on('submit', authEvents.onLogOut)
  // App
  $('#legion-create').on('submit', legionEvents.onLegionCreate)
  $('#legions-index').on('submit', legionEvents.onShowLegions)
  $('#legion-show').on('submit', legionEvents.onGetLegion)
  $('#legion-destroy').on('submit', legionEvents.onDestroyLegion)
  $('#legion-update').on('submit', legionEvents.onUpdateLegion)
  $('#legionActions').click(function() {
    $('#legions').show()
    $('#legion-display').text('')
 })
})
