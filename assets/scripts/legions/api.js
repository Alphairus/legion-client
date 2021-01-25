'use strict'

const store = require('./../store')
const config = require('./../config')

const create = function (legionData) {
  return $.ajax({
    url: config.apiUrl + '/legions',
    method: 'POST',
    data: legionData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/legions',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const show = function (legionData) {
  return $.ajax({
    url: config.apiUrl + '/legions/' + legionData.legion.id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroy = function (legionData) {
  return $.ajax({
    url: config.apiUrl + '/legions/' + legionData.legion.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function (legionData) {
  return $.ajax({
    url: config.apiUrl + '/legions/' + legionData.legion.id,
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
