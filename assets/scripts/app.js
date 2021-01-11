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
    $('#sign-out').on('submit', authEvents.onSignOut)
    $('#legion-create').on('submit', legionEvents.onCreateLegion)
    $('#legion-index').on('submit', legionEvents.onShowLegion)
    $('#legion-show').on('submit', legionEvents.onGetLegion)
    $('#legion-destroy').on('submit', legionEvents.onDestroyLegion)
    $('#legion-update').on('submit', legionEvents.onUpdateLegion)
  })
