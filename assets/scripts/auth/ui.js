'use strict'

const store = require('./../store')

// The ajax function's .then will pass this as a response object
const SignUp = function () {
  $('#message').text('Account successfully created!')
  $('form').trigger('reset')
}

// The .catch will pass this as error object
const onSignUpFailure = function (error) {
  $('#message').text('Sign up failed, error: ' + error.statusText)
}

const onSignIn = function (response) {
  $('#message').text('Logged in!')
  // "Store" the user; create a new key on the 'store' object;
  // give that key a value of response.user
  store.user = response.user
  // Hide before login
  $('.before-login').hide()
  // Show after login
  $('.after-login').show()
  // $('form').trigger('reset')
}

const onSignOut = function () {
  store.user = null
  $('.unauth').show()
  $('.auth').hide()
}

const onsignInFailure = function (error) {
  $('#message').text('Sign in failed, error: ' + error.responseJSON.message)
}

// Success gives 204 'no content' error so there is no response object
const onChangePassword = function () {
  $('#message').text('Changed password successfully')
  $('form').trigger('reset')
}

const onChangePasswordFailure = function (error) {
  $('#message').text('Change password failed with error ' + error.responseJSON.message)
}

const onLogOut = function () {
  $('#message').text('Logged out')

  // Hide after login
  // $('.after-login').hide()
  // Show before login
  // $('.before-login').show()

  // VERY IMPORTANT TO DELETE TOKEN
  store.user = null

  // reset form
  $('form').trigger('reset')
}

const onLogoutFailure = function (error) {
  $('#message').text('Logout Error: ' + error)
  console.log('error is:' + error)
}

module.exports = {
  onSignUp,
  onSignIn,
  onLogOut,
  onChangePassword,
  onSignUpFailure,
  onChangePasswordFailure,
  onLogoutFailure
}
