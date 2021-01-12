'use strict'

const store = require('./../store')

// The ajax function's .then will pass this as a response object
const signUpSuccess = function () {
  $('#message').text('Account successfully created!')
}

// The .catch will pass this as error object
const signUpFailure = function (error) {
  $('#message').text('Sign up failed, error: ' + error.statusText)
}

const signInSuccess = function (response) {
  $('#message').text('Logged in!')
  console.log(store)
  // "Store" the user; create a new key on the 'store' object;
  // give that key a value of response.user
  store.user = response.user
  console.log(store)

  // Hide before login
  $('.before-login').hide()
  // Show after login
  $('.after-login').show()
}

const signInFailure = function (error) {
  $('#message').text('Sign in failed, error: ' + error.responseJSON.message)
}

// Success gives 204 'no content' error so there is no response object
const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#message').text('Change password failed with error ' + error.responseJSON.message)
}

const logoutSuccess = function () {
  $('#message').text('Logged out')

  // Hide after login
  $('.after-login').hide()
  // Show before login
  $('.before-login').show()

  // VERY IMPORTANT TO DELETE TOKEN
  store.user = null

  // reset form
  $('form').trigger('reset')
}

const logoutFailure = function (error) {
  $('#message').text('Logout Error: ' + error)
  console.log('error is:' + error)
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
