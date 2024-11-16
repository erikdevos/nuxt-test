<template>
    <div class="search-wrapper">
      <!-- Bind input value to searchQuery and listen for input changes -->
      <input 
        v-model="searchQuery" 
        @input="handleSearch" 
        placeholder="Zoek een product"
      />
      <button @click="clearSearch" class="update-filtering">Clear</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useProductStore } from '~/store/products';
  
  // Local state to manage the search query
  const searchQuery = ref('');
  
  // Access the product store
  const productStore = useProductStore();
  
  // Handle search input changes
  const handleSearch = () => {
    productStore.filterProducts(searchQuery.value);
  };
  
  // Clear the search query and reset the filtering
  const clearSearch = () => {
    searchQuery.value = '';
    productStore.filterProducts('');
  };
  </script>
  
  <style scoped lang="scss">
  .search-wrapper {
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  input {
    min-width: 20rem;
  }
  
  </style>
  