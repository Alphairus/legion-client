'use strict'

const store = require('./../store')
const config = require('./../config')

const createlegion = function (data) {
  return $.ajax({
    url: config.apiUrl + '/legion',
    method: 'POST',
    // data: data
    data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const indexlegion = function () {
  return $.ajax({
    url: config.apiUrl + '/legion',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const searchlegion = function (legionData) {
  return $.ajax({
    url: config.apiUrl + '/legion/' + legionData.legion.id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroylegion = function (legionData) {
  return $.ajax({
    url: config.apiUrl + '/legion/' + legionData.legion.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updatelegion = function (legionData) {
  return $.ajax({
    url: config.apiUrl + '/legion/' + legionData.legion.id,
    method: 'PATCH',
    data: legionData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createlegion,
  indexlegion,
  searchlegion,
  destroylegion,
  updatelegion
}
