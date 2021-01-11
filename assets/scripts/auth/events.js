'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// event handlers for...
const addHandlers = function () {
  // auth-related buttons
  $('#signup-form').on('submit', onSignUp)
  $('#signin-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('.sign-out').on('click', onSignOut)
  // clicking out of a modal
  $('button[data-dismiss]').on('click', ui.clearAuthForms)
}

// SIGN UP expected responses:
// * successful: JSON as follows...
// {
//   "user": {
//     "id": 1,
//     "email": "an@example.email"
//   }
// }
// * unsuccessful, HTTP Status of 400 Bad Request (empty body)

// run when sign up button is clicked
const onSignUp = function (event) {
  // prevent page refresh
  event.preventDefault()
  // capture user credentials from form and send to server
  const data = getFormFields(event.target)
  api.signUp(data)
    // if signup is successful, immediately run signIn using same credentials
    .then(() => { return api.signIn(data) })
    // use the signInSuccess function if that works
    .then(ui.signInSuccess)
    // if signup was not successful, use signUpError
    .catch(ui.signUpError)
}

// SIGN IN expected responses:
// * successful: JSON as follows...
// {
//   "user": {
//     "id": 1,
//     "email": "an@example.email",
//     "token": "an example authentication token"
//   }
// }
// * unsuccessful: HTTP Status of 401 Unauthorized (empty body)

// run when sign in button is clicked
const onSignIn = function (event) {
  // prevent page refresh
  event.preventDefault()
  // capture user credentials from form and send to server
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInError)
}

// CHANGE PASSWORD expected responses:
// * successful: HTTP status of 204 No Content (no body)
// * unsuccessful: HTTP status of 400 Bad Request (no body)

// run when change password button is clicked
const onChangePassword = function (event) {
  // prevent page refresh
  event.preventDefault()
  // capture user credentials from form and send to server
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordError)
}

// SIGN OUT expected responses:
// * successful: HTTP status of 204 No Content (no body)
// * unsuccessful: HTTP status of 401 Unauthorized (no body)

// run when sign out button is clicked
const onSignOut = function (event) {
  // prevent page refresh
  event.preventDefault()
  // send request to server
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutError)
}

module.exports = {
  addHandlers: addHandlers,
  onSignIn: onSignIn,
  onSignUp: onSignUp,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut
}
