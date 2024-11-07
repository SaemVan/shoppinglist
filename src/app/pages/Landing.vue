<template>
  <div class="p-4">
    <ItemWrite 
      @add-item="addItem"
    />
    <ItemList 
      :items="props.items"
      @delete-item="deleteItem"
    />
    <router-link 
      to="/delete" 
      class="text-blue-500 mt-4 block"
    >
      View Deleted Items
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { itemsAPI } from '../config/api/services/items.js'
import ItemList from '../components/itemList.vue'
import ItemWrite from '../components/itemWrite.vue'
import axios from 'axios'

const props = defineProps(['items'])
const emit = defineEmits(['add-item', 'delete-item', 'update-items', 'update-item'])

const addItem = async (newItem) => {
  try {
    // Post the new item to the server
    const response = await itemsAPI.create(newItem)
    console.log('Item added:', response.data)
    // Emit the new item to update parent state
    // Refresh the items list
    await fetchItems()
  } catch (error) {
    console.error('Error adding item:', error)
  }
}

const deleteItem = async (index) => {
  try {
    const item = props.items[index]
    if (!item.id) {
      console.error('Item ID is missing')
      return
    }
    // Update the item's deleted status
    await itemsAPI.update(item.id, { ...item, deleted: true })
    // Emit the updated item to parent
    emit('update-item', { index, updatedItem: { ...item, deleted: true } })
  } catch (error) {
    console.error('Error updating item:', error)
  }
}

const fetchItems = async () => {
  try {
    const response = await itemsAPI.getAll()
    // Emit the updated items list to parent
    emit('update-items', response.data)
  } catch (error) {
    console.error('Error fetching items:', error)
  }
}

onMounted(async () => {
  await fetchItems()
})
</script>
