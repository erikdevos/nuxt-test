<template>
  <section class="page-content">
    <div class="container">
      <Breadcrumb :breadcrumbs="breadcrumbs" />
      
      <div v-if="product" class="product-wrapper">
        <!-- Product details-->
        <div class="product-info">
          <h1>{{ product.title }}</h1>

          <div class="product-label">
            {{ product.category }}
          </div>

          <div class="product-description content-area">{{ product.description }}</div>
          <div class="product-price">&euro;{{ product.price }}</div>

          <button @click="addToCart(product)" class="btn pos">Add to cart</button>
          
          </div>

          <!-- Product image -->
          <img class="product-image" :src="product.image || 'https://picsum.photos/300'" alt="Product image" />
      </div>

      <!-- Not found -->
      <div v-else>
        <p>Product not found.</p>
      </div>

      <!-- Dialog for cart notification -->
      <dialog ref="cartDialog" class="cart-dialog">
        <p>{{ notificationMessage }}</p>
      </dialog>

    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useProductStore } from '~/store/products'
import { useCartStore } from '~/store/cart'

const route = useRoute()
// Extract only the ID as the last part after splitting by '-'
const productId = Number(route.params.id.split('-').pop()) // Ensure productId is a number

// Store instance
const productStore = useProductStore()

// Cart instance
const cartStore = useCartStore()

// Ref to store product data
const product = ref(null)

// Cart notification
const notificationMessage = ref('') // Message for the dialog
const cartDialog = ref(null) // Reference to the dialog element

// Ref to store breadcrumbs
const breadcrumbs = ref([
  { name: 'Home', to: '/' },
  { name: 'Products', to: '/products' },
  { name: 'Loading...', to: '#' } // Initial loading breadcrumb
])

const fetchProduct = async () => {
  // Check if all products are already in the store
  if (productStore.allProducts.length === 0) {
    console.log('Fetching all products...');
    await productStore.fetchAllProducts(); // Fetch all products to ensure `allProducts` is populated
  }

  // Debugging: Log before calling getProductById
  console.log('Looking for product with ID:', productId);

  // Get product by ID (use `allProducts` to ensure access to the full list)
  product.value = productStore.getProductById(productId);

  // Log the matched product to see if it's correctly matched
  console.log('Matched Product:', product.value);

  // Update breadcrumbs after fetching the product
  if (product.value) {
    breadcrumbs.value[2] = {
      name: product.value.title,
      to: `/product/${product.value.slug}-${product.value.id}`,
    };
  }
};

// Add product to cart
function addToCart(product) {
  cartStore.addToCart(product)
  // Display notification
  notificationMessage.value = `"${product.title}" has been added to your cart.`
  // Open the dialog and close it automatically after 2 seconds
  if (cartDialog.value) {
    cartDialog.value.showModal()
    setTimeout(() => cartDialog.value.close(), 2000)
  }
}

// Fetch product when component is mounted
onMounted(() => {
  fetchProduct()
})
</script>

<style scoped lang="scss">
.product-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  @media only screen and (min-width: 600px) {
    grid-template-columns: 2fr 1fr;
  }  
}

.product-label {
  @include product-label;
  margin-bottom: 1rem;
}

.product-description {
  margin-bottom: 1rem;
}

.product-price {
  font-weight: bold;
  color: $color-primary;
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

.btn {
  @include cta-button;
}

.product-image {
  object-fit: cover;
  width: 100%;
  max-height: 20rem;
  border-radius: $border-radius-image;
  order: -1;
  @media only screen and (min-width: 600px) {
    order: initial;
    max-width: 100%;
    object-fit: fill;
  }
}

.cart-dialog {
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  padding: 1rem;
  background-color: $color-darkgray;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadein 0.3s ease-in;
}

@keyframes fadein {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
