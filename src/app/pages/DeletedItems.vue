<template>
  <div class="p-4">
    <DeletedItemList 
      :items="props.items"
      @restore-item="restoreItem"
    />
    <router-link 
      to="/" 
      class="text-blue-500 mt-4 block"
    >
      Back to Home
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { itemsAPI } from '../config/api/services/items.js'
import DeletedItemList from '../components/deletedItemList.vue'

const props = defineProps(['items'])
const emit = defineEmits(['delete-item', 'update-items'])

const restoreItem = async (index) => {
  try {
    const item = props.items[index]
    if (!item.id) {
      console.error('Item ID is missing')
      return
    }
    
    // Update the item's deleted status
    await itemsAPI.update(item.id, { ...item, deleted: false })
    // Emit the updated item to parent
    emit('update-item', { index, updatedItem: { ...item, deleted: false } })
  } catch (error) {
    console.error('Error updating item:', error)
  }
}

const fetchItems = async () => {
  try {
    const response = await itemsAPI.getAll()
    emit('update-items', response.data)
  } catch (error) {
    console.error('Error fetching items:', error)
  }
}

onMounted(async () => {
  await fetchItems()
})
</script> 