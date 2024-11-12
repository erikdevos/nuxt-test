<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import { useProductStore } from '~/store/products.ts'
import ProductCard from '~/components/ProductCard.vue'
import Pagination from '~/components/Pagination.vue'

const productStore = useProductStore()
const breadcrumbs = ref([
  { name: 'Home', to: '/' },
  { name: 'Products', to: '/products' }
])

// Fetch products on mount
onMounted(async () => {
  await productStore.fetchProducts()
  console.log('Products after fetching:', productStore.products)  // Debugging
})

// Watch for changes in products and log
watchEffect(() => {
  console.log('Product store:', productStore.products)  // Debugging
})

// Pagination functions
const handlePageChange = (newPage) => {
  productStore.fetchProducts(newPage)
}
</script>

<template>
  <section class="page-content">
    <div class="container">
      <Breadcrumb :breadcrumbs="breadcrumbs" />

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
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}
</style>
