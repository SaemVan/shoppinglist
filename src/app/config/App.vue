<template>
  <div class="app-container">
    <AddItemForm 
      :items="items"
      @add-item="addItem"
      @toggle-delete="toggleDeleteItem"
    />
    <DeletedItems 
      :items="items"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AddItemForm from '../components/AddItemForm.vue'
import DeletedItems from '../components/DeletedItems.vue'

const items = ref([])

const addItem = (newItem) => {
  items.value.push(newItem)
}

const toggleDeleteItem = (index) => {
  items.value[index].deleted = !items.value[index].deleted
}
</script>

<style scoped>
.app-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 2rem;
}
</style>
