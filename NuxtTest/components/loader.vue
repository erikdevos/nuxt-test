<template>
    <div class="loading-state">
        <p>{{ message }}</p>
    </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: 'Loading...',  // Default message if no prop is passed
  }
})
</script>

<style scoped lang="scss">

.loading-state {
  text-align: center;
  font-size: 1.2rem;
  color: #3490dc;
}

.loading-state {
  text-align: center;
  font-size: 1.2rem;
  color: #3490dc;
}

.loading-state::after {
  content: '';
  display: inline-block;
  width: 4rem;
  height: 4rem;
  border: 7px solid #ccc;
  border-top: 7px solid #3490dc;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>