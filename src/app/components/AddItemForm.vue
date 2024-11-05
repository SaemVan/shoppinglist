<template>
  <div class="add-item-container">
    <div class="input-group">
      <label>Add new Item:</label>
      <input 
        type="text" 
        v-model="newItem" 
        @keyup.enter="addItem"
        placeholder="Enter item name"
      >
    </div>
    <ul class="items-list">
      <li 
        v-for="(item, index) in items" 
        :key="index"
        @click="toggleItemDelete(index)"
      >
        <span v-if="!item.deleted">{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-item', 'toggle-delete'])

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const newItem = ref('')

const addItem = () => {
  if (newItem.value.trim()) {
    emit('add-item', { 
      text: newItem.value,
      deleted: false
    })
    newItem.value = ''
  }
}

const toggleItemDelete = (index) => {
  emit('toggle-delete', index)
}
</script>

<style scoped>
.add-item-container {
  width: 300px;
}

.items-list {
  background-color: green;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.input-group {
  margin-bottom: 1rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
}
</style>