<template>
    <header class="header">
      <NuxtLink to="/" class="logo-wrapper"><h1>My Nuxt App</h1></NuxtLink>
      <NuxtLink to="/shopping-cart" class="cart-wrapper">
        <span class="cart-number">{{ cartItemCount }}</span>
        <img src="/assets/resources/icon-cart.svg" alt="Cart">
      </NuxtLink>
      <NuxtLink to="/contact" class="header-cta">Contact</NuxtLink>
    </header>
</template>
  
<script setup>
import { computed } from 'vue'
import { useCartStore } from '~/store/cart'

const cartStore = useCartStore()

// Compute the total number of items in the cart
const cartItemCount = computed(() => {
  return cartStore.cart.reduce((total, item) => total + item.quantity, 0)
})
</script>

<style scoped lang="scss">
.header {
  background-color: #3490dc;
  color: #fff;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  text-align: center;

  .logo-wrapper {
    text-decoration: none;
  }

  h1 {
    color: white;
    margin-bottom: 0;
    font-size: 1.3rem;
    @media only screen and (min-width: 600px) {
      font-size: 1.5rem;
    }
  }

  .header-cta {
    @include cta-button;
    margin-left: 1rem;
    font-size: 1rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
  }

  .cart-wrapper {
    position: relative;
    margin-left: auto;
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 0.3rem;

    &:hover {
      .cart-number {
        background-color: $color-darkgray;
        color: $color-white;
      }
    }

    img {
      width: 1.8rem;
      color: white;
    }

    .cart-number {
      font-size: 0.8rem;
    }

    span {
      position: relative;
      background: white;
      color: black;
      border-radius: 999999999px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: auto;
      width: 1.25rem;
      height: 1.25rem;
    }
  }
}
</style>