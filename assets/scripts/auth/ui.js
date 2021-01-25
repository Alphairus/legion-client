'use strict'

const store = require('./../store')

// The ajax function's .then will pass this as a response object
const signUpSuccess = function () {
  $('#message').text('Account successfully created!')
  $('form').trigger('reset')
}

// The .catch will pass this as error object
const signUpFailure = function (error) {
  $('#message').text('Sign up failed, error: ' + error.statusText)
}

const signInSuccess = function (response) {
  $('#message').text('Log in successful!')
  // "Store" the user; create a new key on the 'store' object;
  // give that key a value of response.user
  store.user = response.user
  // Show/Hide on sign in
  $('.before-login').hide()
  $('#buttons').show()
  $('#auth').show()
  // $('form').trigger('reset')
}

const signInFailure = function (error) {
  $('#message').text('Sign in failed, error: ' + error.responseJSON.message)
}

// Success gives 204 'no content' error so there is no response object
const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#legion-display').text('')
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#message').text('Change password failed with error ' + error.responseJSON.message)
}

const logoutSuccess = function () {
  $('#message').text('Logged out')
  $('#legion-display').text('')

  // Hide after login
  $('#buttons').hide()
  $('#legions').hide()
  $('#auth').hide()
  // Show before login
  $('.before-login').show()

  //DELETE TOKEN
  store.user = null

  // reset form
  $('form').trigger('reset')
}

const logoutFailure = function (error) {
  $('#message').text('Logout Error: ' + error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  logoutSuccess,
  logoutFailure
}
