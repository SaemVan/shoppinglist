<template>
  <div class="p-4">
    <h1 class="text-2xl mb-4">Item Manager</h1>
    <input 
      v-model="newItem" 
      @keyup.enter="addItem"
      placeholder="Add new item"
      class="border p-2 rounded"
    >
    <ul class="mt-4">
      <li 
        v-for="(item, index) in props.items" 
        :key="index" 
        @click="deleteItem(index)"
      >
        <span 
          v-if="!item.deleted"
        >
          {{ item.text }}
        </span>
      </li>
    </ul>
    <router-link 
      to="/delete" 
      class="text-blue-500 mt-4 block"
    >
      View Deleted Items
    </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-item', 'delete-item'])
const props = defineProps(['items'])
const newItem = ref('')

const addItem = () => {
  emit('add-item', newItem.value)
  newItem.value = ''
}

const deleteItem = (index) => {
  emit('delete-item', index)
}

</script>