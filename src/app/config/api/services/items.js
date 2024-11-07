import apiClient from '../axios'

export const itemsAPI = {
  getAll() {
    return apiClient.get('/items')
  },

  create(text) {
    return apiClient.post('/items', {
      text,
      deleted: false
    })
  },

  update(id, data) {
    return apiClient.put(`/items/${id}`, data)
  }
} 