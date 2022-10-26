import axios from 'axios'
import aspida from '@aspida/axios'
import api from '../api/$api'
import qs from 'qs'

axios.defaults.xsrfCookieName = 'CSRF-TOEKN'
axios.defaults.xsrfHeaderName = 'X-CSRF-Token'
axios.defaults.withCredentials = true
axios.defaults.headers.common = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
}

export const apiClient = api(
  aspida(axios, {
    baseURL: process.env.API_ORIGIN,
    paramsSerializer: (params) => qs.stringify(params, { indices: false }),
  })
)
