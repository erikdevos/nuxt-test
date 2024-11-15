<script setup>
import { ref, onMounted, watchEffect, toRefs } from 'vue'
import { useProductStore } from '~/store/products.ts'
import ProductCard from '~/components/productcard.vue'
import Pagination from '~/components/pagination.vue'
import Loader from '~/components/Loader.vue'

const productStore = useProductStore()
const breadcrumbs = ref([
  { name: 'Home', to: '/' },
  { name: 'Products', to: '/products' }
])

// Loading state
const loading = ref(true)

// Fetch products on mount
onMounted(async () => {
  try {
    await productStore.fetchProducts()
    console.log('Products after fetching:', productStore.products) // Log products after fetch
    loading.value = false // Set loading to false once the data is fetched
  } catch (error) {
    console.error('Error fetching products:', error) // Log any errors
    loading.value = false // Set loading to false in case of error
  }
})

// Watch for changes in products and log
watchEffect(() => {
  console.log('Product store:', productStore.products)  // Debugging products
})

// Pagination functions
const handlePageChange = (newPage) => {
  productStore.fetchProducts(newPage)
}

// Unwrap products with toRefs
const { products } = toRefs(productStore)
</script>

<template>
  <section class="page-content">
    <div class="container">
      <Breadcrumb :breadcrumbs="breadcrumbs" />

      <!-- Loading state -->
      <div v-if="loading">
        <Loader message="Loading whatever we want..." />
      </div>

      <!-- Product List when data is fetched -->
      <div v-else-if="products && products.length" class="product-list">
        <ProductCard
          v-for="product in products"
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
