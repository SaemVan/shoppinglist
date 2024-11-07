import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://672cbabb1600dda5a9f9aa50.mockapi.io/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiClient 