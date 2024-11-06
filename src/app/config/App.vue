<template>
  <router-view 
    :items="items"
    @add-item="addItem"
    @delete-item="deleteItem"
  ></router-view>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([{ text: 'Item 1', deleted: false }, { text: 'Item 2', deleted: false }])

const addItem = (newItem) => {
  items.value.push({ text: newItem, deleted: false })
}

const deleteItem = (index) => {
  items.value[index].deleted = !items.value[index].deleted
}
</script>

<style scoped>

</style>
