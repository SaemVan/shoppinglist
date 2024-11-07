<template>
    <h2 class="text-xl mb-4">Active Items</h2>
    <ul class="mt-4">
      <li 
        v-for="(item, index) in props.items" 
        :key="item.id || index" 
        @click="deleteItem(index)"
      >
        <span v-if="!item.deleted">{{ item.text }}</span>
      </li>
    </ul>
</template>

<script setup>
const props = defineProps(['items'])
const emit = defineEmits(['delete-item'])

const deleteItem = (index) => {
  emit('delete-item', index)
}
</script>

<style>

</style>