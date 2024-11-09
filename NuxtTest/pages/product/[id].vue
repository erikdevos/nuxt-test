<template>
  <section class="page-content">
    <div class="container">
      <Breadcrumb :breadcrumbs="breadcrumbs" />
      
      <div v-if="product" class="product-wrapper">
        <div class="product-info">
          <h1>{{ product.title }}</h1>

          <div class="product-label">
            {{ product.category }}
          </div>

          <p>{{ product.description }}</p>
          <p>Price: ${{ product.price }}</p>

          <a href="#" class="btn pos">Add to cart</a>
        </div>

        <img class="product-image" :src="product.image || 'https://picsum.photos/300'" alt="Product image" />
      </div>

      <!-- Not found -->
      <div v-else>
        <p>Product not found.</p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useProductStore } from '~/store/products'

const route = useRoute()
const productId = parseInt(route.params.id, 10) // Ensure the id is a number

const productStore = useProductStore()

// Ref to store product data
const product = ref(null)

// Ref to store breadcrumbs
const breadcrumbs = ref([
  { name: 'Home', to: '/' },
  { name: 'Products', to: '/products' },
  { name: 'Loading...', to: '#' } // Initial loading breadcrumb
])

// Fetch product data
const fetchProduct = async () => {
  // First check if we already have products in the store
  if (productStore.products.length === 0) {
    // Fetch all products if not already fetched
    await productStore.fetchProducts()
  }

  // Get the specific product from the store
  product.value = productStore.getProductById(productId)

  // Update breadcrumbs after fetching the product
  if (product.value) {
    breadcrumbs.value[2] = {
      name: product.value.title, // Update with the actual product title
      to: `/product/${productId}`
    }
  }
}

// Fetch product when component is mounted
onMounted(() => {
  fetchProduct()
})
</script>


<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.product-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.product-label {
  @include product-label;
}

.btn {
  @include cta-button;
}

.product-image {
  object-fit: fill;
  max-width: 100%;
  max-height: 20rem;
  border-radius: $border-radius-image;
}


</style>
