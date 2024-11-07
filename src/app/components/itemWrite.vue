<template>
  <h1 class="text-2xl mb-4">Item Manager</h1>
    <input 
      v-model="newItem" 
      @keyup.enter="addItem"
      placeholder="Add new item"
      class="border p-2 rounded"
    >
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['items'])
const newItem = ref('')
const emit = defineEmits(['add-item'])

const addItem = () => {
  emit('add-item', newItem.value)
  newItem.value = ''
}
</script>

<style>

</style>