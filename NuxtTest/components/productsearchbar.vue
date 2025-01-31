<template>
    <div class="search-wrapper">
      <!-- Bind input value to searchQuery and listen for input changes -->
      <input 
        v-model="searchQuery" 
        @input="handleSearch" 
        placeholder="Find products"
        aria-label=""
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
    gap: 0.5rem;
    justify-content: stretch;
    @media only screen and (min-width: 600px) {
      justify-content: flex-end;
 
    }
    button {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }
  
  input {
    flex: 1;
    width: auto;
    @media only screen and (min-width: 600px) {
        min-width: 18rem;
        flex: initial;
    }
  }
  
  </style>
  