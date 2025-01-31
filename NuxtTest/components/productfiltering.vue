<template>
  <div class="product-filtering">
    <ul>
      <!-- Loop through the categories and render them -->
      <li 
        v-for="category in categories" 
        :key="category" 
        @click="selectCategory(category)"
        :class="{ active: selectedCategory === category }"
      >
        {{ formatCategoryName(category) }}
      </li>
    </ul>
  </div>
</template>

<script setup>
// Import the product store
import { useProductStore } from '@/store/products'

// Define the 'categories' prop that will be passed from the parent component
defineProps({
  categories: {
    type: Array,
    required: true
  },
  formatCategoryName: {
    type: Function,
    required: true
  }
})

// Access the store instance
const productStore = useProductStore()

// Emit category when clicked
const emit = defineEmits(['category-select'])

// Initialize selectedCategory ref to an empty string initially
const selectedCategory = ref(null)

const selectCategory = (category) => {
  selectedCategory.value = category // Track selected category
  emit('category-select', category) // Emit selected category to parent
}
</script>

<style scoped lang="scss">
.product-filtering {
  white-space: nowrap;
  width: 100%;
  max-width: calc(100vw - 2rem); // hacky temp fix
  overflow-x: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media only screen and (min-width: 600px) {
    margin-bottom: 3rem;  
  }

  ul {
    list-style-type: none;
    padding: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin: 0;
    gap: 0.8rem;
    row-gap: 0.5rem;
    display: flex;

    @media only screen and (min-width: 600px) {
      flex-wrap: wrap;
      overflow-x: visible;
      padding: 0;
    }

    li {
      display: inline-flex;
      border: solid 1px $color-primary-dark;
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

      &.active {
        background-color: $color-primary-dark;
        color: white;
      }
    }
  }
}
</style>
