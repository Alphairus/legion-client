'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// run when sign up button is clicked
const onSignUp = function (event) {
  // prevent page refresh
  event.preventDefault()
  // capture user credentials from form and send to server
  const form = event.target

  const data = getFormFields(form)

  api.signUp(data)
    // // if signup is successful, immediately run signIn using same credentials
    // .then(() => { return api.signIn(data) })
    // use the signInSuccess function if that works
    .then(ui.signUpSuccess)
    // if signup was not successful, use signUpError
    .catch(ui.signUpFailure)
}

// run when sign in button is clicked
const onSignIn = function (event) {
  // prevent page refresh
  event.preventDefault()
  // capture user credentials from form and send to server
  const form = event.target
  const data = getFormFields(form)
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
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// const onChangePasswordClick = function (event) {
//   $('#changePasswordModalLabel').text('Change Password')
// }

// SIGN OUT expected responses:
// * successful: HTTP status of 204 No Content (no body)
// * unsuccessful: HTTP status of 401 Unauthorized (no body)

// run when sign out button is clicked
const onLogOut = function (event) {
  // prevent page refresh
  event.preventDefault()


  // send request to server
  api.logOut()
    .then(ui.logOutSuccess)
    .catch(ui.onFailure)
}

module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onLogOut
}
