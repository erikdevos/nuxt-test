<template>
    <div class="product-filtering">
      <ul>
        <!-- Loop through the categories and render them -->
        <li 
          v-for="category in categories" 
          :key="category" 
          @click="selectCategory(category)"
        >
          {{ category }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  // Define the 'categories' prop that will be passed from the parent component
  defineProps({
    categories: {
      type: Array,
      required: true
    }
  })
  
  // Emit category when clicked
  const emit = defineEmits(['category-select'])
  
  const selectCategory = (category) => {
    emit('category-select', category)
  }
  </script>
  
  <style scoped lang="scss">
  .product-filtering {
    margin-bottom: 3rem;

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      gap: 0.8rem;
      display: flex;
      flex-wrap: wrap;
  
      li {
        display: inline-flex;
        outline: solid 1px $color-primary-dark;
        color: $color-primary-dark;
        cursor: pointer;
        padding: 2px 8px;
        transition: background-color 0.3s ease;
        border-radius: $border-radius-label;
        font-size: 0.85rem;
  
        &:hover {
          background-color: $color-primary-dark;
          color: white;
        }
      }
    }
  }
  </style>
  