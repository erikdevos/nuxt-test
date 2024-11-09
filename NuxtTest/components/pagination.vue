<script setup>
const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['page-change'])

const onPageChange = (newPage) => {
  emit('page-change', newPage)
}
</script>

<template>
  <div class="pagination">
    <!-- Pagination controls -->
    <button @click="onPageChange(currentPage - 1)" :disabled="currentPage <= 1">&lsaquo; Previous</button>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <button @click="onPageChange(currentPage + 1)" :disabled="currentPage >= totalPages">Next &rsaquo;</button>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;

  button {
    @include cta-button;
  }
}
</style>
