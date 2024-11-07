<template>
  <h1 class="text-2xl mb-4">Deleted Items</h1>
  <ul>
    <li 
      v-for="(item, index) in items" 
      :key="item.id || index" 
      @click="restoreItem(index)"
    >
      <span v-if="item.deleted">{{ item.text }}</span>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(['items'])
const emit = defineEmits(['delete-item'])

const restoreItem = (index) => {
  emit('restore-item', index)
}
</script>

<style>

</style>