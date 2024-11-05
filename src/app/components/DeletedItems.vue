<template>
  <div class="deleted-items-container">
    <h2>Deleted Items</h2>
    <ul class="deleted-list">
      <li 
        v-for="(item, index) in items"
        :key="index"
      >
        <span v-if="item.deleted">{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.deleted-items-container {
  width: 300px;
  margin: 0 auto;
}

.deleted-list {
  background-color: #ff6b6b;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
}
</style>