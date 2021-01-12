'use strict'

const store = require('./../store')
const config = require('./../config')

const create = function (data) {
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

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/legion',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const show = function (legionData) {
  return $.ajax({
    url: config.apiUrl + '/legion/' + legionData.legion.id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroy = function (legionData) {
  return $.ajax({
    url: config.apiUrl + '/legion/' + legionData.legion.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function (legionData) {
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
  create,
  index,
  show,
  destroy,
  update
}
