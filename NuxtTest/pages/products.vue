<script setup>
import { ref, onMounted } from 'vue'
import { useProductStore } from '~/store/products.ts'
import ProductCard from '~/components/productcard.vue'
import Pagination from '~/components/pagination.vue'
import Loader from '~/components/loader.vue'
import ProductFiltering from '~/components/productfiltering.vue'

const productStore = useProductStore()
const breadcrumbs = ref([
  { name: 'Home', to: '/' },
  { name: 'Products', to: '/products' }
])

const loading = ref(true)
const categories = ref([]) // Define categories as a ref

// Fetch all products and categories on mount
onMounted(async () => {
  // Fetch all products and cache them
  await productStore.fetchAllProducts()

  // Get categories from the full cached list of products
  categories.value = productStore.allCategories || [] 

  // Fetch the first page of products for the overview
  await productStore.fetchProducts(1)

  loading.value = false
  console.log('Categories:', categories.value)  // Log categories for debugging
})

// Pagination functions
const handlePageChange = (newPage) => {
  productStore.fetchProducts(newPage)  // Load the products for the new page
}

// Filter products by selected category
const filterByCategory = (category) => {
  // Here you can filter products by category if needed, but for now, we load all products on category selection.
  productStore.fetchProducts(1)  // Reset to page 1 on category change
}
</script>

<template>
  <section class="page-content">
    <div class="container">
      <Breadcrumb :breadcrumbs="breadcrumbs" />

      <!-- Loading state -->
      <div v-if="loading">
        <Loader message="Loading products..." />
      </div>

      <!-- Product Filtering Component (pass categories as a prop) -->
      <ProductFiltering 
        :categories="productStore.allCategories" 
        @category-select="filterByCategory" 
      />

      <div class="product-list" v-if="productStore.products && productStore.products.length">
        <!-- Product overview item -->
        <ProductCard
          v-for="product in productStore.products"
          :key="product.id"
          :product="product"
        />
      </div>

      <!-- No products -->
      <div v-else>
        <p>No products found.</p>
      </div>

      <!-- Pagination Component -->
      <Pagination
        :currentPage="productStore.currentPage"
        :totalPages="productStore.totalPages"
        @page-change="handlePageChange"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.product-list {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}
</style>
