<template>
  <div class="p-4">
    <h1 class="text-2xl mb-4">Deleted Items</h1>
    <ul>
      <li 
        v-for="(item, index) in props.items" 
        :key="index" 
        @click="deleteItem(index)"
      >
        <span 
          v-if="item.deleted"
        >
          {{ item.text }}
        </span>
      </li>
    </ul>
    <router-link 
      to="/" 
      class="text-blue-500 mt-4 block"
    >
      Back to Home
    </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['delete-item'])
const props = defineProps(['items'])

const deleteItem = (index) => {
  emit('delete-item', index)
}
</script> 