<template>
  <router-view 
    :items="items"
    @add-item="addItem"
    @delete-item="deleteItem"
    @update-item="updateItem"
    @update-items="updateItems"
    @restore-item="restoreItem"
  ></router-view>
</template>

<script setup>
import { ref } from 'vue'
import { itemsAPI } from './api/services/items.js'

const items = ref([])

const addItem = async (newItem) => {
  try {
    const response = await itemsAPI.create(newItem)
    items.value.push(response.data)
  } catch (error) {
    console.error('Error adding item:', error)
  }
}

const deleteItem = (index) => {
  items.value[index].deleted = true
}

const restoreItem = (index) => {
  items.value[index].deleted = false
}

const updateItem = ({ index, updatedItem }) => {
  items.value[index] = updatedItem
}

const updateItems = (newItems) => {
  items.value = newItems
}
</script>

<style scoped>

</style>
