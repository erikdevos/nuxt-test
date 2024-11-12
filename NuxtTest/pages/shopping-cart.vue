<template>
  <div class="page-content shopping-cart"> 
    <div v-if="cartStore.cart.length">
      <h1>Shopping cart</h1>
      <ul>
        <li v-for="item in cartStore.cart" :key="item.id">
          {{ item.title }} - Quantity: {{ item.quantity }}
          <button @click="removeFromCart(item.id)">Remove</button>
        </li>
      </ul>
      <p>Total items: {{ cartStore.totalItems }}</p>
      <button @click="clearCart">Clear Cart</button>
    </div>
    
    <!-- Display message when cart is empty -->
    <div v-else>
      <p>There are no products in the shopping cart.</p>
      <NuxtLink to="/products" class="start-shopping-link">Start shopping now</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/store/cart'

const cartStore = useCartStore()

function removeFromCart(id) {
  cartStore.removeFromCart(id)
}

function clearCart() {
  cartStore.clearCart()
}
</script>

<style scoped lang="scss">
.start-shopping-link {
  color: #3490dc;
  font-weight: bold;
  text-decoration: underline;
}

.page-content.shopping-cart {
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
</style>
