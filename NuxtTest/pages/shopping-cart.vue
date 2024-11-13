<template>
  <section class="page-content shopping-cart"> 
    <div class="container">
      <div v-if="cartStore.cart.length" class="shopping-cart-view">
        <h1>Shopping cart</h1>
        <ul class="shopping-cart-list">
          <li v-for="item in cartStore.cart" :key="item.id" class="cart-list-item">
            <img :src="item.image || 'https://picsum.photos/60'" alt="Product image" class="cart-item-img" />
            <span class="cart-item-title">{{ item.title }}</span>
            <span class="cart-item-price">&euro;{{ item.price }}</span>
            <span class="cart-item-quantity">Qty: <strong>{{ item.quantity }}</strong></span>
            <button @click="removeFromCart(item.id)" class="btn icon neg">
              <img src="assets/resources/icon-delete.svg" alt="Delete" title="Delete item from cart">
            </button>
          </li>
          <li class="cart-totals-row">
            <span class="cart-total-qty">Total items: <strong>{{ cartStore.totalItems }}</strong></span>
            <span class="cart-total-price-label">Total price:</span>
            <span class="cart-total-price-value">&euro;{{ cartStore.totalPrice }}</span>
          </li>
        </ul>

        <div class="button-bar">
          <button @click="clearCart" class="btn neutral">Clear Cart</button>
          <NuxtLink to="/checkout" class="btn pos">Go to checkout</NuxtLink>
        </div>
      </div>
      
      <!-- Display message when cart is empty -->
      <div v-else>
        <p>There are no products in the shopping cart.</p>
        <NuxtLink to="/products" class="start-shopping-link btn pos">Start shopping now</NuxtLink>
      </div>

   </div>
  </section>
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
.page-content.shopping-cart {
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.cart-total {
  margin-bottom: 1.5rem;
}

.shopping-cart-list {
  display: grid;
  gap: 1rem;
  margin-bottom: 3rem;
  list-style-type: none;

  li.cart-list-item {
    display: grid;
    grid-template-columns: 1fr 7fr 1fr 1fr auto;
    gap: 1rem;
    align-items: center;
    padding-bottom: 0.5rem;
    border-bottom: solid 1px lightgray;
    
    .cart-item-img {
      border-radius: 5px;
    }

    .cart-item-title {
      text-align: left;
    }

    .cart-item-price {
      text-align: center;
    }

    &:last-of-type {
      border-bottom: none;
    }
  }

}

.button-bar {
  display: flex;
  justify-content: space-between;
}

.cart-totals-row {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  .cart-total-price-label {
    margin-left: auto;
  }
  .cart-total-price-value {
    font-weight: bold;
  }
}

</style>
