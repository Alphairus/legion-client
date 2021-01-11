'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// run when sign up button is clicked
const onSignUp = function (event) {
  // prevent page refresh
  event.preventDefault()
  // capture user credentials from form and send to server
  const form = event.target
  const data = getFormFields(event.target)
  api.signUp(data)
    // // if signup is successful, immediately run signIn using same credentials
    // .then(() => { return api.signIn(data) })
    // use the signInSuccess function if that works
    .then(ui.signInSuccess)
    // if signup was not successful, use signUpError
    .catch(ui.signUpFailure)
}

// run when sign in button is clicked
const onSignIn = function (event) {
  // prevent page refresh
  event.preventDefault()
  // capture user credentials from form and send to server
  const form = event.target
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// CHANGE PASSWORD expected responses:
// * successful: HTTP status of 204 No Content (no body)
// * unsuccessful: HTTP status of 400 Bad Request (no body)

// run when change password button is clicked
const onChangePassword = function (event) {
  // prevent page refresh
  event.preventDefault()
  // capture user credentials from form and send to server
  const form = event.target
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
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
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut
}
